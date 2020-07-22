const workboxVersion = "5.1.3";
importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),
workbox.core.setCacheNameDetails({
    prefix: "igality"
}),
workbox.core.skipWaiting(),
workbox.core.clientsClaim(),
workbox.precaching.precacheAndRoute([{
    revision: "18686391d92875793bb2ae0cc92746e0",
    url: "./2020/03/30/Java十万个为什么/index.html"
},
{
    revision: "c0c0e633e06359f930819e0c43a97838",
    url: "./2020/04/08/面试题笔记/index.html"
},
{
    revision: "57dff6a9dc5a17d6ae87b4fbbd3ca0f3",
    url: "./2020/06/24/linux防火墙常用命令/index.html"
},
{
    revision: "7fd434b4922f366a416ef4521f645f13",
    url: "./2020/06/24/redis命令/index.html"
},
{
    revision: "35c757027340a1887c86f484e3ca3c62",
    url: "./2020/06/29/博客项目/index.html"
},
{
    revision: "014f721f795ceb0607185daca6db5256",
    url: "./2020/07/01/07_SPRING_DAY01/index.html"
},
{
    revision: "d03b26b2b1f4473b1899cebb5df60daf",
    url: "./2020/07/01/07_SPRING_DAY02/index.html"
},
{
    revision: "46145de7ecfae21670f9460a3fc65140",
    url: "./2020/07/02/IntellijIDEA快捷使用/index.html"
},
{
    revision: "1f4bbd5aeaeceee3096e55c69aaeef13",
    url: "./2020/07/03/07_SPRING_DAY03/index.html"
},
{
    revision: "65ec85197b4a4e2c6c0d6557c56397f9",
    url: "./2020/07/04/08_SPRINGMVC_DAY01/index.html"
},
{
    revision: "a5ca2cbe55393d909ef71603d4e26cad",
    url: "./2020/07/04/08_SPRINGMVC_DAY02/index.html"
},
{
    revision: "327c10180ce64ffd98da55d51261f959",
    url: "./2020/07/04/hello-world/index.html"
},
{
    revision: "58adbf40cbadcaf894bcca141cfdae62",
    url: "./2020/07/06/08_SPRINGMVC_DAY03/index.html"
},
{
    revision: "331a0a57a1f3fc43b3c2dc42645514c7",
    url: "./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"
},
{
    revision: "00307bb4cd1f34816827de4f2b845a8a",
    url: "./2020/07/06/tomcat去掉项目名/index.html"
},
{
    revision: "800a0647ef0e066d4350402e336520db",
    url: "./2020/07/08/09_MYBATIS_DAY01_1748/index.html"
},
{
    revision: "bbfeee450395577c4133bf0b4f7466d9",
    url: "./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"
},
{
    revision: "05b170ecd343d1351b65a771023f1e57",
    url: "./2020/07/08/09_MYBATIS_DAY02/index.html"
},
{
    revision: "412a25c458b5031d2b8f816db7e92f57",
    url: "./2020/07/10/09_MYBATIS_DAY03/index.html"
},
{
    revision: "b694a87848bd4aa90ac96482825776cb",
    url: "./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"
},
{
    revision: "41903aa9e024e7273b1d8345a20d2510",
    url: "./2020/07/17/2020-07-17-Hexo问题解决/index.html"
},
{
    revision: "70de4a0fc516b03ccff3d9940d07a6d1",
    url: "./2020/07/20/网站建设方案书/index.html"
},
{
    revision: "b537b25a7989694c0d8bf5a688826854",
    url: "./404.html"
},
{
    revision: "c982312722cf069ce614579057650107",
    url: "./archives/2020/03/index.html"
},
{
    revision: "55a3ad43a9be88d8b23cf8f79291ee19",
    url: "./archives/2020/04/index.html"
},
{
    revision: "a24e095cbb253ba5e023b51f34efa1d9",
    url: "./archives/2020/06/index.html"
},
{
    revision: "c5c859967b3bf99b0a939c1b32997767",
    url: "./archives/2020/07/index.html"
},
{
    revision: "b09ae30b8c068eb53180aa9e28930a1b",
    url: "./archives/2020/07/page/2/index.html"
},
{
    revision: "1d92327c6b24a47e5492d78336eed084",
    url: "./archives/2020/index.html"
},
{
    revision: "619014ca3f159ab64546a4753da5036d",
    url: "./archives/2020/page/2/index.html"
},
{
    revision: "d68ba75707fff069483e1223e8c93ed8",
    url: "./archives/2020/page/3/index.html"
},
{
    revision: "24ccfcdf778fcc0a28aac63994284ce5",
    url: "./archives/index.html"
},
{
    revision: "578b9bf917b0b036f83c1271dda58a78",
    url: "./archives/page/2/index.html"
},
{
    revision: "420558b2b3e066aba75ef41341d09183",
    url: "./archives/page/3/index.html"
},
{
    revision: "069aaa06bced573fd315738a1483467a",
    url: "./artitalk/index.html"
},
{
    revision: "fbe994054426fadb2dff69d824c5c67a",
    url: "./assets/css/APlayer.min.css"
},
{
    revision: "8f1017e7a73737e631ff95fa51e4e7d7",
    url: "./assets/js/APlayer.min.js"
},
{
    revision: "bfac0368480fd344282ec018d28f173d",
    url: "./assets/js/Meting.min.js"
},
{
    revision: "4dea13142e61a56a15a787a1caa9eaf3",
    url: "./categories/Hexo/index.html"
},
{
    revision: "741a734b0826081a83cc65c598fb2930",
    url: "./categories/index.html"
},
{
    revision: "4189b7f18481a2d68b7cd8992859b36c",
    url: "./categories/达内笔记/index.html"
},
{
    revision: "7be29b3ddf4e4c10cafac465c8a3318d",
    url: "./css/index.css"
},
{
    revision: "d41d8cd98f00b204e9800998ecf8427e",
    url: "./css/var.css"
},
{
    revision: "6260072482c7fcc388c43689d5ee5bfe",
    url: "./index.html"
},
{
    revision: "1eb3d905f8d4f15804fc050b7cd49373",
    url: "./js/main.js"
},
{
    revision: "fde9b8fefca51cc039ed4c0c2d2c34f0",
    url: "./js/search/algolia.js"
},
{
    revision: "271777e2b46e5743942ca9ac31baff15",
    url: "./js/search/local-search.js"
},
{
    revision: "e8455f75769585811cd6b3220787d08e",
    url: "./js/third-party/activate-power-mode.js"
},
{
    revision: "bb643bd9c2ac59f6ce2a1251b8014624",
    url: "./js/third-party/canvas-nest.js"
},
{
    revision: "4ca518354a167db9fe0869c0982ff215",
    url: "./js/third-party/canvas-ribbon.js"
},
{
    revision: "c2420dfec66aa5bad663e6c365a129c8",
    url: "./js/third-party/click_heart.js"
},
{
    revision: "22f4c82da4faed04c79e61fcbbdf675c",
    url: "./js/third-party/ClickShowText.js"
},
{
    revision: "080fdfcacffc6828826484645140af50",
    url: "./js/third-party/fireworks.js"
},
{
    revision: "6df6ba5f90c4dff026fc3eea73933e8b",
    url: "./js/third-party/piao.js"
},
{
    revision: "65f69c7060c833d42ffaabe5c95bb010",
    url: "./js/tw_cn.js"
},
{
    revision: "f2f712d5d52625b377855945420eea15",
    url: "./js/utils.js"
},
{
    revision: "082c0196117a3739625df05b10c06a6a",
    url: "./link/index.html"
},
{
    revision: "a257f47fe977d31f0fbe97da3ba42429",
    url: "./manifest.json"
},
{
    revision: "088cf13a2b492b0e15c71d560e89690b",
    url: "./messageboard/index.html"
},
{
    revision: "7f5bd49a030cc7e28af53ab2a6167b5c",
    url: "./music/index.html"
},
{
    revision: "fd848f1b2b619e7e97115aefe8280a5c",
    url: "./page/2/index.html"
},
{
    revision: "1774c2db538cc8c46c5e3b9c6eefdb74",
    url: "./page/3/index.html"
},
{
    revision: "42d5a7a8437f02dbca56613b4bc4e0cf",
    url: "./reprint/index.html"
},
{
    revision: "8134eb043ada9f2ae07fd04a7eeed736",
    url: "./reprint/index的副本.html"
},
{
    revision: "5d8610b9ee975a0774c21870347c57cb",
    url: "./service-worker.js"
},
{
    revision: "8d0653b0426e3c8ccc627c078a842dad",
    url: "./tags/Artitalk/index.html"
},
{
    revision: "fc0f2f191e45298747037b80c39d479b",
    url: "./tags/Exception/index.html"
},
{
    revision: "f7d0d3988957271a7871dc738287494a",
    url: "./tags/hexo/index.html"
},
{
    revision: "2c7b7c0465498c79c450950ae77850e0",
    url: "./tags/index-1.html"
},
{
    revision: "60bf0e7743c392b5258637f0413cd805",
    url: "./tags/index.html"
},
{
    revision: "bd774da66dd72071e4dc89ee3be37f68",
    url: "./tags/MyBatis/index.html"
},
{
    revision: "3256a4fb7b4061d8813c76975d68f969",
    url: "./tags/nginx/index.html"
},
{
    revision: "320bfe33498970fd5a039129f2d231b3",
    url: "./tags/Spring/index.html"
},
{
    revision: "fff922b539806953668b694579cd35ca",
    url: "./tags/SpringMVC/index.html"
},
{
    revision: "045b8111c834e25e89bddace9882ca51",
    url: "./tags/tomcat/index.html"
},
{
    revision: "94b470796bea6cc46ce9e459ed8ae9e2",
    url: "./tags/字符编码/index.html"
},
{
    revision: "5edeb74b4e410278cbacf6142239e939",
    url: "./tags/负载均衡/index.html"
},
{
    revision: "ac01c8ab4a2277b9ea6e4cf3b8158cf0",
    url: "./tags/面试题/index.html"
}]),
workbox.precaching.cleanupOutdatedCaches(),
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/, new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [new workbox.expiration.ExpirationPlugin({
        maxEntries: 1e3,
        maxAgeSeconds: 2592e3
    }), new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
    })]
})),
workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/, new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [new workbox.expiration.ExpirationPlugin({
        maxEntries: 1e3,
        maxAgeSeconds: 2592e3
    }), new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
    })]
})),
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets"
})),
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [new workbox.expiration.ExpirationPlugin({
        maxEntries: 1e3,
        maxAgeSeconds: 2592e3
    }), new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
    })]
})),
workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/, new workbox.strategies.CacheFirst({
    cacheName: "static-libs",
    plugins: [new workbox.expiration.ExpirationPlugin({
        maxEntries: 1e3,
        maxAgeSeconds: 2592e3
    }), new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
    })]
})),
workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/, new workbox.strategies.CacheFirst({
    cacheName: "external-images",
    plugins: [new workbox.expiration.ExpirationPlugin({
        maxEntries: 1e3,
        maxAgeSeconds: 2592e3
    }), new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
    })]
})),
workbox.googleAnalytics.initialize();