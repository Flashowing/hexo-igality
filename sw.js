const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "igality"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bab0018c3ed18b363f07f18170fd81be","url":"./2020/04/08/面试题笔记/index.html"},{"revision":"58a6f15b13312b6bb9edcd1277192f18","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"bd7f069c843477931762093b680dacd2","url":"./2020/06/24/redis命令/index.html"},{"revision":"4d829fb83c84b65d7537d8f6039987c2","url":"./2020/06/29/博客项目/index.html"},{"revision":"d775ec99eea96f70526e85e158ffd520","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"22e88181273e5957a2654de3b0a28165","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"a7bdd006532a9084033c63c1f4711ff8","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"2d8c462ff6c809d78d0dd3891504281a","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"7f6294f9c166e1358491828dfbccdef2","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"419c0103c6d01874cc41ee4f48306860","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"2275c7b34f663629ccc820bb18846ec2","url":"./2020/07/04/hello-world/index.html"},{"revision":"3a394f2ee161eaf7b8ade32c1266e65d","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"c72538c5d36c27cbb5b3797cd1d20342","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"8eaf33ec2aaf736a61c7cdbd6e26a088","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"9a664dc06ed6d8eb8638bc98111a29e3","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"fe5644c5c4fe0c718e63d5d6e54babf5","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"ad8263b1bc37415d23401af1b457a16a","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"29614ceaee8168efa69966c30f29e977","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"f52e9c9a8160d5dd64938cd6e929c212","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"4aa6847cb471f2a357408b3c8b24bb92","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"a2ee4d2e4788897a062f249fe355b10f","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"c14e95559367a1d23be47ae0b0dfe03d","url":"./404.html"},{"revision":"2bc4d01d9cc34d215ce145a47c31bc76","url":"./archives/2020/04/index.html"},{"revision":"b9b8ba16dd55bb0030f6ec680a551394","url":"./archives/2020/06/index.html"},{"revision":"05d6c3460ddb11bc49043c59dfae976a","url":"./archives/2020/07/index.html"},{"revision":"9c21f752f5e0eeaf46a7d0b4db651773","url":"./archives/2020/07/page/2/index.html"},{"revision":"df26de2208dc79e9e1ed381afa66c940","url":"./archives/2020/index.html"},{"revision":"017af7c1dbb7b85283d6408b2856fe02","url":"./archives/2020/page/2/index.html"},{"revision":"7f722cd1f3a3ff27e9589cd5756ab119","url":"./archives/2020/page/3/index.html"},{"revision":"f4d0337a7364ff398214b3ea0da1dac3","url":"./archives/index.html"},{"revision":"f2b1bf6fa9aaaf9d2a58b415345ddf66","url":"./archives/page/2/index.html"},{"revision":"a4815cbc63089e68737f3e585d9a9425","url":"./archives/page/3/index.html"},{"revision":"7d41e97f2078fe49cd27be810a35753f","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"04cfe33b04297b0ca2b40f3ac7982fbe","url":"./categories/Hexo/index.html"},{"revision":"fa1266f700b1545bc4a8475c6a31d3e1","url":"./categories/index.html"},{"revision":"edbb05742f831c69c83491144e6aeb34","url":"./categories/达内笔记/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f083d179644af3d60a335581b52ed9f2","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"4bda1118bb5d3eaed4654020e7ec4208","url":"./link/index.html"},{"revision":"b4f7bdffbd01c978b4cbfa4c8d924429","url":"./manifest.json"},{"revision":"0c129f3acd025bc7797c9edebaafb5f1","url":"./messageboard/index.html"},{"revision":"14dfc89c438cc61d72cf1ac68e7b47eb","url":"./music/index.html"},{"revision":"94271bc4f0f6e9a737bbab8d167c0830","url":"./page/2/index.html"},{"revision":"7aea0d2a8516cf99b6ff2409ed729de3","url":"./page/3/index.html"},{"revision":"14c75f6c5ad8809510b7fde984c5c305","url":"./reprint/index.html"},{"revision":"629fcbc53a1b47f9f55bdbc8650de9bb","url":"./reprint/index的副本.html"},{"revision":"4ad7ee2a34a798452349709f2fefa530","url":"./service-worker.js"},{"revision":"7a032b2077295e4a903a9ad02659e48f","url":"./tags/Artitalk/index.html"},{"revision":"23c49a0e7351363f9f2b02da9e0c07d1","url":"./tags/Exception/index.html"},{"revision":"f790e74d7322b18408dcb85f80dc9f26","url":"./tags/Hexo/index.html"},{"revision":"2243853ccf52d09a6470dca2c309c42b","url":"./tags/index-1.html"},{"revision":"b086413cc5a2596445ed9328d7f8f6d3","url":"./tags/index.html"},{"revision":"5256cab9911ccb61372ec1f440cd3d03","url":"./tags/MyBatis/index.html"},{"revision":"43f1d8fac66e570e59b69bf9c5801003","url":"./tags/nginx/index.html"},{"revision":"8738e800c9e23e82c62eb3439a837a7b","url":"./tags/Spring/index.html"},{"revision":"15e5ad2f8bfd002964f7f5a29b79050c","url":"./tags/SpringMVC/index.html"},{"revision":"f0aa791098c8e94ef310d4716dca1970","url":"./tags/tomcat/index.html"},{"revision":"d708f69a0d260c1fd68e95eac6da076d","url":"./tags/字符编码/index.html"},{"revision":"fbff859f00160cb2d7fab014fc1678d6","url":"./tags/负载均衡/index.html"}]);

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
