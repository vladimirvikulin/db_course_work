const {Router} = require('express');
const router = Router();
const {v4: uuid} = require('uuid');
const {decode} = require('../utils/decode');
const connection = require('../db/config');
router.get('/', (req, res) => {
    connection.query('select * from user', (err, users) => {
      if (err) {
        res.status(500).json({
          message: 'Error on server. Try later',
        });
        return;
      }
      const convertedData = users.map(({
        id,
        email,
        username,
        avatar,
      }) => ({
        id: decode(id),
        email,
        username,
        avatar,
      }));
  
      res.status(200).json({
        data: convertedData,
      });
    });
  });
  
  router.get('/:id', (req, res) => {
    const {id} = req.params;
    connection.query(`select * from user where id = unhex("${id}")`, (err, [user]) => {
      if (err) {
        res.status(500).json({
          message: 'Error on server. Try later',
        });
        return;
      }
  
      if (!user) {
        res.status(404).json({
          message: 'Project was not found. Check the id',
        });
        return;
      }
  
      res.status(200).json({
        data: {
          ...user,
          id: decode(user.id),
        },
      });
    });
  });
  
  router.post('/', (req, res) => {
    const id = uuid().replaceAll('-', '');
    const {email, username, avatar} = req.body;
    if (!(email && username && avatar)) {
      res.status(400).json({
        message: 'All fields are required',
      });
      return;
    }
  
    connection.query(
      `insert into user (
          id,
          email, 
          username, 
          avatar
        ) values (
          unhex("${id}"),
          "${email}",
          "${username}",
          "${avatar}"
        )`,
      (err, result) => {
        if (err) {
          res.status(500).json({
            message: 'Error on server. Try later',
          });
          return;
        }
  
        res.status(200).send(
          `Succesfully added user with id = ${id}`
        );
      }
    );
  });
  
  router.put('/:id', (req, res) => {
    const {id} = req.params;
    connection.query(`select * from user where id = unhex("${id}")`, (err, [user]) => {
      if (err) {
        res.status(500).json({
          message: 'Error on server. Try later',
        });
        return;
      }
  
      if (!user) {
        res.status(404).json({
          message: 'Project was not found. Check the id',
        });
        return;
      }
  
      const {
        email,
        username,
        avatar
      } = {
        ...user,
        ...req.body
      };
  
      connection.query(
        `update user set 
          email = "${email}", 
          username = "${username}",
          avatar = "${avatar}"
          where id = unhex("${id}")`,
        (err, result) => {
          if (err) {
            console.log(err)
            res.status(500).json({
              message: 'Error on server. Try later',
            });
            return;
          }
  
          res.status(200).send(
            `Succesfully updated user with id = ${id}`
          );
        }
      );
    });
  });
  
  router.delete('/:id', (req, res) => {
    const {id} = req.params;
    connection.query(`delete from user where id = unhex("${id}")`, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Error on server. Try later',
        });
        return;
      }
  
      res.status(200).send(
        `Succesfully deleted user with id = ${id}`
      );
    });
  });
  
module.exports = router;