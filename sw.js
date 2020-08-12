const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c0345f5b147338bbb8d2f38946031873","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"3ac33a97995096d27ee6355e868f38f5","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"e9cb7c0b312f4286a984f1d176f5f88a","url":"./2020/06/24/redis命令/index.html"},{"revision":"da22d64e2af6dbe0d69e8c192f9770d7","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"9b5bfc1507aedb7544d500470eadc54c","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"d1644eba5866876ee89838ff6acf6d70","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"a2e47edecc1b6fa96c88b15a7a1e9688","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"48d1edafd0d9634fcbeca044f5455d53","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"a57c97394c8d90dd142846681520a0b1","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"b98f5acbdef1f38b948b91236e6f0c0c","url":"./2020/07/04/hello-world/index.html"},{"revision":"047d34854eef97624f6a5eb934d0025b","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"d436986ae1c18dfdd024af5529c25933","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"bb886a550c1f26da6d979f1ff23c8aae","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"de650a9e9066f5fd039df415b6949a14","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"378954aab255ee57ffa06e16ac66fe70","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"c61ced769d6726fbc66ae7a71b0d4bd1","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"d3a8882f7c01f16253a315f5c007e3aa","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"e5322964640a94d93d820dd7696b507e","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"a36f8d5da4a217ee5d229896c9ff9082","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"a6ba36be1ed844169d14830db28cfcf8","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"fabcaba3f19428e812b94cf3d5243397","url":"./2020/07/22/Java十万个为什么(2)/index.html"},{"revision":"2f4df4f3c3f333914d6cb5f3b84ef85d","url":"./2020/07/22/数据库/index.html"},{"revision":"02078b124fe6e3fa5b9f38bebd099a93","url":"./2020/07/22/线程/index.html"},{"revision":"26402ff1eaf8a7ce841349a0e747136a","url":"./2020/07/23/面试内容/index.html"},{"revision":"04835c387ab78bfba506e03db49ef532","url":"./2020/07/24/面试题/index.html"},{"revision":"6bb64d039b486dc71a9744991eb2a6e4","url":"./2020/07/24/面试题笔记/index.html"},{"revision":"896c616b9867d3e5070156028709ccd6","url":"./2020/08/03/Java基础/index.html"},{"revision":"43a807047c48d7226ec30c1779cb7302","url":"./2020/08/03/JVM部分面试题/index.html"},{"revision":"27f7ba190fd03c86cd105d90c1dd863f","url":"./2020/08/03/mybatis部分面试题/index.html"},{"revision":"93f62aa4d046026edeebb56181f8e10d","url":"./2020/08/03/MySql部分面试题/index.html"},{"revision":"8b3d1cab15a7a0693f06320c94a4c963","url":"./2020/08/03/Nginx部分面试题/index.html"},{"revision":"050c412ff1126d8f3dafa379cf77e95a","url":"./2020/08/03/Redis部分面试题/index.html"},{"revision":"ca3f8913a399ef8beec76bd6c64dd013","url":"./2020/08/03/多线程部分面试题/index.html"},{"revision":"d85e870d0eb3dacf06465d16327c4100","url":"./2020/08/03/容器部分面试题/index.html"},{"revision":"db78be70a47fb3b70bbb096abdb91a10","url":"./404.html"},{"revision":"c0145f3e43c92117315635cee6b2db6a","url":"./archives/2020/03/index.html"},{"revision":"7b3bad9434bb740f68b339f2e2185eed","url":"./archives/2020/06/index.html"},{"revision":"cb6bc6dd5278a5247054b53eff5777b8","url":"./archives/2020/07/index.html"},{"revision":"9ed83adf53da79c11b9cea6549998ced","url":"./archives/2020/07/page/2/index.html"},{"revision":"33e4d80afb0f35141053ee768aa5e317","url":"./archives/2020/07/page/3/index.html"},{"revision":"79b9151d62b99eee62f8f08ef1128a18","url":"./archives/2020/08/index.html"},{"revision":"b8fbe6dd4e8f8900b04c0da3c36937da","url":"./archives/2020/index.html"},{"revision":"17352524c76f4fe43ff0229defb67367","url":"./archives/2020/page/2/index.html"},{"revision":"717096efa108e1569ba0e0fffd6915a8","url":"./archives/2020/page/3/index.html"},{"revision":"5fa8061c763624e7377f1444936ef7c9","url":"./archives/2020/page/4/index.html"},{"revision":"dd4eb205a7d8281e7fb415d820e70b87","url":"./archives/index.html"},{"revision":"e8779d23a16e4a13348789ed8cb70272","url":"./archives/page/2/index.html"},{"revision":"cfeeccb90b9d6567fafb52c271b35bff","url":"./archives/page/3/index.html"},{"revision":"bcc8ede27243b074223fc5206b578f48","url":"./archives/page/4/index.html"},{"revision":"8645555ed0dc99f28736848665a80f76","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"e16b167b2ba4cd49c64b6e40ae666171","url":"./categories/Hexo/index.html"},{"revision":"24ce319641e0a6aafc78dc59c1d88d1d","url":"./categories/index.html"},{"revision":"0782b6be40bc88db30d4ce223b4054d8","url":"./categories/达内笔记/index.html"},{"revision":"50ca5e732ddd0a891edb16c77754b718","url":"./categories/面试题/index.html"},{"revision":"79f8275d1cb0968ac2353a9cd8ebe0b2","url":"./categories/面试题/page/2/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f8e7e4719f1790683f94ca800374a117","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"467758b494cebe8351771e629df31611","url":"./link/index.html"},{"revision":"a257f47fe977d31f0fbe97da3ba42429","url":"./manifest.json"},{"revision":"2e08768d343fe23d41f42903fd4adf96","url":"./messageboard/index.html"},{"revision":"c6f3a2d69f53be7bec7687b7a9444aea","url":"./music/index.html"},{"revision":"de8ea6118d5bab9441047747baa61655","url":"./page/2/index.html"},{"revision":"aa649c143ee227f80820d41d3c9736b6","url":"./page/3/index.html"},{"revision":"f71c9d9570dacd1e8d3fbf42c9537c85","url":"./page/4/index.html"},{"revision":"33cb9f51cd6421781bdffdd050f557e3","url":"./reprint/index.html"},{"revision":"1d71bc8a9b44e8788e47fba057025b86","url":"./reprint/index的副本.html"},{"revision":"89226952d10574979de987b678f4c918","url":"./service-worker.js"},{"revision":"9fe44d035039896d9ce006f39a5d5378","url":"./tags/Artitalk/index.html"},{"revision":"a6e1bd1f8e012df6debc07e00141eae5","url":"./tags/Exception/index.html"},{"revision":"0a0a392021879ed1db277bc26910067a","url":"./tags/Hexo/index.html"},{"revision":"cf69dfcb622c85155af55442c50555b0","url":"./tags/index-1.html"},{"revision":"c15fed8bb3cf258f705dc7f50e8263e7","url":"./tags/index.html"},{"revision":"77b09a095ca71235c4f3848ed677c35a","url":"./tags/MyBatis/index.html"},{"revision":"a7e114bc53aa696bf3f8c0cc5f27acc4","url":"./tags/nginx/index.html"},{"revision":"ed6aaa8d930244d26a9e3330347d225b","url":"./tags/Spring/index.html"},{"revision":"5106514f0ec59e457528fc919c89ece4","url":"./tags/SpringMVC/index.html"},{"revision":"0610b8bc4bba4378419fb1b33eab5f53","url":"./tags/tomcat/index.html"},{"revision":"36e99e84565b1b16da303222f966a037","url":"./tags/字符编码/index.html"},{"revision":"4309e771ed647b40d598b65f8e3266ac","url":"./tags/负载均衡/index.html"},{"revision":"8b2c5a17ec8c34aa71f04b47641a2447","url":"./tags/面试题/index.html"},{"revision":"c141eb789b9113eb54b8b985dabd5a80","url":"./tags/面试题/page/2/index.html"}]);

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
