/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "065dd0dc5bd6b60fafa379f4e75261d8"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.71e89ad7.css",
    "revision": "01ae5fbc5b2f37f7bc564bd7a6cb4ec5"
  },
  {
    "url": "assets/img/create-result.fcc544ac.png",
    "revision": "fcc544acf3d0b04475cd89077962b709"
  },
  {
    "url": "assets/img/create-user.05b9f034.png",
    "revision": "05b9f03497b5c8f8c00ab5c595e42a9b"
  },
  {
    "url": "assets/img/delete-result-byID.ff32fca9.png",
    "revision": "ff32fca9c9f4a2222731709eaed5ae3b"
  },
  {
    "url": "assets/img/delete-result.74e86101.png",
    "revision": "74e861013b891622d98621b20b4f70fa"
  },
  {
    "url": "assets/img/delete-user.f2987fed.png",
    "revision": "f2987fed9b005b1b7fac42d1dde1584c"
  },
  {
    "url": "assets/img/read-user.a8f7bdbe.png",
    "revision": "a8f7bdbe394991bc81a8c3ad6d39afe8"
  },
  {
    "url": "assets/img/read-users.93bc5907.png",
    "revision": "93bc59079c6a092bad07ca778e33c50b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-result.0c688c3e.png",
    "revision": "0c688c3eac5abecd8d44717718ca67ce"
  },
  {
    "url": "assets/img/update-user.b62c9af5.png",
    "revision": "b62c9af5191407c74d5dc561a8ca013e"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.cec2ed9f.js",
    "revision": "84b987c051a2f5be2207e7f758438054"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.755985e5.js",
    "revision": "348d7225e0afeb13272f3ff115e91862"
  },
  {
    "url": "assets/js/14.49aa7893.js",
    "revision": "e269fd883dad74f1b705eefcdd6fc9c3"
  },
  {
    "url": "assets/js/15.11a4580e.js",
    "revision": "d84ae54486f72cc76f06637875ce34cd"
  },
  {
    "url": "assets/js/16.71fae8b5.js",
    "revision": "164773ba204f2a4bbae6246ea1ef348a"
  },
  {
    "url": "assets/js/17.746d0f65.js",
    "revision": "c08f79bea96edf70d48d870b9b395b7c"
  },
  {
    "url": "assets/js/18.6c5ebf74.js",
    "revision": "6e3d58f6d5002c120bb6a711dca482af"
  },
  {
    "url": "assets/js/19.3e765882.js",
    "revision": "8d4aa30b4e19693d252b1da4afeb6c8e"
  },
  {
    "url": "assets/js/2.63bb2266.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.b41fdaa3.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.9ed6df7d.js",
    "revision": "226df79b9caafe1af202d6c904204653"
  },
  {
    "url": "assets/js/22.366e6187.js",
    "revision": "ce351d8cd1fa1c75ddcc2a46ef413529"
  },
  {
    "url": "assets/js/23.c876dce8.js",
    "revision": "550eb42b2cc0ad6e9ef58948177b33b3"
  },
  {
    "url": "assets/js/24.5f6286e6.js",
    "revision": "03e92b5d65bb3702fd707cecd9d4a997"
  },
  {
    "url": "assets/js/26.3c108c65.js",
    "revision": "14070395307afbb22387ff5bad8d960c"
  },
  {
    "url": "assets/js/3.b3f488c6.js",
    "revision": "2ff6c4bc926be1bf2fbb9b2b0ea4b75e"
  },
  {
    "url": "assets/js/4.4ded2ed6.js",
    "revision": "e82d2d7c0cbf65eceb164c2b4d9f1db9"
  },
  {
    "url": "assets/js/5.77652e35.js",
    "revision": "956a31b5a51211553849fb62eae2af2a"
  },
  {
    "url": "assets/js/6.cb1ca25b.js",
    "revision": "fa5e8c6dd8fcfb1e81a1277f88437590"
  },
  {
    "url": "assets/js/7.2d0d4e1c.js",
    "revision": "19f11ac31c85c82d8654cb6b87d63f3f"
  },
  {
    "url": "assets/js/8.39d5d3d4.js",
    "revision": "9fcb8f61e9cfdc5ae4e295534c8fc05a"
  },
  {
    "url": "assets/js/9.6a0c4c57.js",
    "revision": "0451ff4db2380cc8e2e1dc8fb14be457"
  },
  {
    "url": "assets/js/app.ca3953b1.js",
    "revision": "931e3f2c6b313664f18f24c372d19fd7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ac51f6fddd4147be5819df0c44a75a8e"
  },
  {
    "url": "design/index.html",
    "revision": "63c1a85f2afc275ff0ba72adc972819c"
  },
  {
    "url": "index.html",
    "revision": "02c76df7589be2df803ca818100c0737"
  },
  {
    "url": "intro/index.html",
    "revision": "c97e72e28519cbae1a2ec5c49edbec62"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "54fdf9b9660e5991a3ac330d8109328a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "33fe711004c03e1aa4d0c19cbec4471d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f75946fcfa0064dc8968a896e6d68a5e"
  },
  {
    "url": "software/index.html",
    "revision": "5c335299d2355c73161a896f254ede4e"
  },
  {
    "url": "test/index.html",
    "revision": "2838d1d4cbafb89622705519a6675c1d"
  },
  {
    "url": "use cases/index.html",
    "revision": "dde702a5b957c8e5a52ca83387a1ec71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
