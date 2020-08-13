const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "igality"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4cf4df29b6c9afe91b9b12ea858738f0","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"3ac33a97995096d27ee6355e868f38f5","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"fe6fb729c0d05b2dd2703fae53872d7b","url":"./2020/06/24/redis命令/index.html"},{"revision":"847b2053bdf7b6a13ae22a84b6df0c97","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"a414a7defa2365c1b12ca8363764b4a6","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"fb6945b001782c055e72fd11e5e1b39f","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"25830206482f192cd664aafb6c5be102","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"89b2bca394e9aecfbde17d6236770ce5","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"f689b57f926131213d234a512b5fda8a","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"9e0458ece414420577f7f1f8d74b3934","url":"./2020/07/04/hello-world/index.html"},{"revision":"c1d21a59416bef5bb6e2b3fc9e9a4135","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"d436986ae1c18dfdd024af5529c25933","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"6c63943ed3fe0154b7eaaf2c3bd3b563","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"de650a9e9066f5fd039df415b6949a14","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"378954aab255ee57ffa06e16ac66fe70","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"c61ced769d6726fbc66ae7a71b0d4bd1","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"d3a8882f7c01f16253a315f5c007e3aa","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"e5322964640a94d93d820dd7696b507e","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"a36f8d5da4a217ee5d229896c9ff9082","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"a6ba36be1ed844169d14830db28cfcf8","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"6434334e505684a26ce181808ad826a4","url":"./2020/07/22/Java十万个为什么(2)/index.html"},{"revision":"a3a214870750e95247ea4c9ec78efacf","url":"./2020/07/22/数据库/index.html"},{"revision":"bfc15e4b6f304b0d074a4a77ea7712eb","url":"./2020/07/22/线程/index.html"},{"revision":"09408d526f1dad986ae6c1fe4b8f639a","url":"./2020/07/23/面试内容/index.html"},{"revision":"57551ea74fe3ad2c1454d74bbad6299f","url":"./2020/07/24/面试题/index.html"},{"revision":"093cc2fe6a459ad7908b01d1b133a7bf","url":"./2020/07/24/面试题笔记/index.html"},{"revision":"68418744c92f163841db3feceb97d0f1","url":"./2020/08/03/Java基础/index.html"},{"revision":"05d3a8deadb7abe79934cfaa35f400bc","url":"./2020/08/03/JVM部分面试题/index.html"},{"revision":"7c3f1d0b1b4ab72b37cf539c277f0f22","url":"./2020/08/03/mybatis部分面试题/index.html"},{"revision":"7d6d5eef5c904836742d3586f10e7349","url":"./2020/08/03/MySql部分面试题/index.html"},{"revision":"4ec53899b575e5e3b9f1122e6edccbcc","url":"./2020/08/03/Nginx部分面试题/index.html"},{"revision":"7a06e275718d74495c19230588a30c12","url":"./2020/08/03/Redis部分面试题/index.html"},{"revision":"6c21b8bdd256748a9cf704d37c98a001","url":"./2020/08/03/多线程部分面试题/index.html"},{"revision":"8fd3d99e4e17ddd595c33a7a4576b2bf","url":"./2020/08/03/容器部分面试题/index.html"},{"revision":"7fa65d6ca1a2810b5df00f36e1400407","url":"./404.html"},{"revision":"8b88da6c7fac6478e163c617480087ce","url":"./archives/2020/03/index.html"},{"revision":"b3dd46925ee25015989732f86fad19f8","url":"./archives/2020/06/index.html"},{"revision":"018f4d8961e7a9bb73ec4276b4b1d3b0","url":"./archives/2020/07/index.html"},{"revision":"38f1c193546556aa1fb57b2896e4a56f","url":"./archives/2020/07/page/2/index.html"},{"revision":"3523972b010278e9cdea619321570c3f","url":"./archives/2020/07/page/3/index.html"},{"revision":"cd005de58d9d6a52f54bad8f87a51190","url":"./archives/2020/08/index.html"},{"revision":"9e3deee153586b2c240689ad5f0e97bf","url":"./archives/2020/index.html"},{"revision":"bae3b4095943927e80a8258e4159889b","url":"./archives/2020/page/2/index.html"},{"revision":"4b54549b45c65d0e6965090a0c34388d","url":"./archives/2020/page/3/index.html"},{"revision":"ee4478165ba4fd9aa9bb396d54f4ce05","url":"./archives/2020/page/4/index.html"},{"revision":"d690c835099a51f4c2c7c8d2055f24a9","url":"./archives/index.html"},{"revision":"24ceda11736b8d1e235c502b53af65f9","url":"./archives/page/2/index.html"},{"revision":"e36b54aefc5b822edc6b1a7c343651fd","url":"./archives/page/3/index.html"},{"revision":"2b6205d24e841d9089f1fd1fab099e3c","url":"./archives/page/4/index.html"},{"revision":"a925a043ebe06286e9fdd6f1b8acc7f6","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"71aa0e0556929754f3b201296f3619fe","url":"./categories/Hexo/index.html"},{"revision":"faf8707fd6bd49325cac9fd624614351","url":"./categories/index.html"},{"revision":"c155806ffc9fb69fbc8f9037986cada7","url":"./categories/达内笔记/index.html"},{"revision":"acdcb6a0094d409ec2c204f0ca35f1b7","url":"./categories/面试题/index.html"},{"revision":"fc5d1325de78250d8cb5a418c0619374","url":"./categories/面试题/page/2/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"458b3a3635d9cfe6af0653d50b7d8792","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"1ceab7bca2eef2990a30f67cf1ee1155","url":"./link/index.html"},{"revision":"a257f47fe977d31f0fbe97da3ba42429","url":"./manifest.json"},{"revision":"4de1fa618d8fcfbb726bc78a6e1b5f9b","url":"./messageboard/index.html"},{"revision":"f24f098343e4cb949e36c4bc1cd2cced","url":"./music/index.html"},{"revision":"a3dbd8afb4904c790fe8cd89077ef910","url":"./page/2/index.html"},{"revision":"0b7390d110bf152da8b0e59c88188291","url":"./page/3/index.html"},{"revision":"076f6d919b5d8311c0529cda799559ef","url":"./page/4/index.html"},{"revision":"4b84717297c9b1a1a1808276881d6a20","url":"./reprint/index.html"},{"revision":"921464148909ca001e676c239908ad71","url":"./reprint/index的副本.html"},{"revision":"7528695ea0ad1caa5b462f13b12d3b31","url":"./service-worker.js"},{"revision":"cc901b92ad44833d3f739981471f4dc4","url":"./tags/Artitalk/index.html"},{"revision":"0484ab93d281dd0899acc935b586e77e","url":"./tags/Exception/index.html"},{"revision":"8794fc3572e4cb966994ebcb1323a0d3","url":"./tags/hexo/index.html"},{"revision":"9e2a8a55b7b6a6a2351b4907678709f3","url":"./tags/index-1.html"},{"revision":"5d4ab013207ba392cb8e7972ed513344","url":"./tags/index.html"},{"revision":"42258b59f1b224b22fbd2c7844f6807e","url":"./tags/MyBatis/index.html"},{"revision":"34ff46e34de57f5bb5e28a3ebaedfb3a","url":"./tags/nginx/index.html"},{"revision":"b67ef597f20c909f5cdf7d4014025bfe","url":"./tags/Spring/index.html"},{"revision":"df52bd1390b9bdb57480ce9ea853cd8b","url":"./tags/SpringMVC/index.html"},{"revision":"64599431250d91222e9b319312c56d2d","url":"./tags/tomcat/index.html"},{"revision":"1937e04346025687baaeff8a6783bdbf","url":"./tags/字符编码/index.html"},{"revision":"8553bd1127fe57a8703afc2630b81eb0","url":"./tags/负载均衡/index.html"},{"revision":"3dd28718af985646fac9caedc4aa6969","url":"./tags/面试题/index.html"},{"revision":"abc29b6c158c896932121f1f3b27f68b","url":"./tags/面试题/page/2/index.html"}]);

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
