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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "038c196bf075df14ba2af52022af65bd"
  },
  {
    "url": "assets/css/0.styles.2bd4d1a8.css",
    "revision": "e1d238de3ccf1b2f32a983fc00b8d6d5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4105af60.js",
    "revision": "b7c85c308a52f7d22f32ad489f52bfc1"
  },
  {
    "url": "assets/js/3.45ac9ca4.js",
    "revision": "5d7b4ab5fba3117695fe05b023993a4b"
  },
  {
    "url": "assets/js/4.41f8b43d.js",
    "revision": "02a0c9c8deb1a5555e10cefd1a4ce1ad"
  },
  {
    "url": "assets/js/5.9772c60f.js",
    "revision": "cf9d7abe3968630283c992b086f67f6c"
  },
  {
    "url": "assets/js/app.65c0a0a1.js",
    "revision": "789c559d4d0aa56ea60e0c7d6dc9e740"
  },
  {
    "url": "config.html",
    "revision": "a4247821724d99a614b663c9f313e152"
  },
  {
    "url": "favicon.png",
    "revision": "1258940c4d62f09bc856709bb950e68b"
  },
  {
    "url": "index.html",
    "revision": "1532b55a98dd562ac9913e219302af04"
  },
  {
    "url": "nav下拉列表.png",
    "revision": "0d741e39bac37b285aee99e09e8eee6c"
  },
  {
    "url": "nav分组.png",
    "revision": "14e483c3f2e5ce7510028aea252d9f4d"
  },
  {
    "url": "nav添加链接.png",
    "revision": "a3eab7fe887700fa21ce0a651c6dbf60"
  },
  {
    "url": "vuepress官网推荐完整目录.png",
    "revision": "e5fa54e650d5d3b83536ec09bfc06252"
  },
  {
    "url": "vuepress目录示例模板.png",
    "revision": "c2d8b8b5fd21019b8314d8f0f2355ca0"
  },
  {
    "url": "使用npm下载vuepress.png",
    "revision": "203525754cb6aba81b01ad612376ce26"
  },
  {
    "url": "使用yarn下载vuepress.png",
    "revision": "c10b84bd2c1fdd0c4173b22533179605"
  },
  {
    "url": "使用修改后的编译命令.png",
    "revision": "dc14a1a28772e39c649791f77fc72c38"
  },
  {
    "url": "侧边栏标题优先级.png",
    "revision": "6d7d5dffa6eea19fd4691271fce0f50a"
  },
  {
    "url": "初始化.png",
    "revision": "3fab32a60a2b5d9afa569a042f991ab6"
  },
  {
    "url": "首个页面.png",
    "revision": "e21dd8fc82f125173ffd6a1b65f8eb0a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
