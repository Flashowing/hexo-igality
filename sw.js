const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "igality"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"54c0b0e5e3a8e0f69284d74ce4a8118f","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"dc587ff4dbcacbd09c85518e0f72f174","url":"./2020/04/08/面试题笔记/index.html"},{"revision":"73b503a03b36649bcea4b036464e9b20","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"b5ac179dc286f47a0a21ed6120d13955","url":"./2020/06/24/redis命令/index.html"},{"revision":"e0922984da493bfd11250465c0c6b6a4","url":"./2020/06/29/博客项目/index.html"},{"revision":"fbab05f670db6d59783018425d305459","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"43879dd53eef1e8f6fe86ad4aef4d87d","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"8469415a20ee4b0c225210aa94cfed55","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"a6c9733d5fb80dd41e7bf9484d990412","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"db345c8db74f1bde39241375b06b6886","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"179496dd51808398be5e2c39d8aee6b3","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"158086ebad0782184126eb2c3f078079","url":"./2020/07/04/hello-world/index.html"},{"revision":"ae9d7a495bc4af2b326046d60b471974","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"b73870256189505307fef6346dae734a","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"9c58d6f4f58667c49cfddfc52a4f02d5","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"fe0a228b600c90ae81b4bab5dbcae952","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"6b19b586950ff9a908a89b93adf1b3b4","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"9b7d22b5421e13c2c476a31ef9cd0cb2","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"37c6d127705738e25bb159723948c68b","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"bcc4c761de295c72c207249203b0dc0b","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"2a9dfb85ca6160757500208df923128e","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"bff1aaa8a1b8334acc0c605b1245e0bc","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"c0ee55ca515b406f91b0c80043d51347","url":"./404.html"},{"revision":"c417268693150c71a38521a400899647","url":"./archives/2020/03/index.html"},{"revision":"2823d10f41722e1eabfff9ac301e4b7f","url":"./archives/2020/04/index.html"},{"revision":"a07d3678da83f72777f93f471e338816","url":"./archives/2020/06/index.html"},{"revision":"70cfacc614f048877e35cc8ae14afae5","url":"./archives/2020/07/index.html"},{"revision":"29ba9a2dce996b1e737fbaf1f79d57eb","url":"./archives/2020/07/page/2/index.html"},{"revision":"0301624e59ce44c8338e3e861931259e","url":"./archives/2020/index.html"},{"revision":"e02a46ad0aabeeb5b8099525eb5964dd","url":"./archives/2020/page/2/index.html"},{"revision":"99f879789edc993a26a377f40a8ff2fc","url":"./archives/2020/page/3/index.html"},{"revision":"a21f272edd3d11be7d3e6c40c73a1327","url":"./archives/index.html"},{"revision":"6dee09469997408a24298f217c46e094","url":"./archives/page/2/index.html"},{"revision":"62a230f2cec1908fd9ddacff82f7fb11","url":"./archives/page/3/index.html"},{"revision":"f9fe02604bd4748a4e05f3dcc58fea1b","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"28f2bb36d4b580804d59e06759ed275e","url":"./categories/Hexo/index.html"},{"revision":"741a734b0826081a83cc65c598fb2930","url":"./categories/index.html"},{"revision":"62764456e7363386a203d36cd759ecb8","url":"./categories/达内笔记/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c11de1bfbe6a437fc6151895da2a895d","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"65a888a5e61951df4c33f43bf0b3645a","url":"./link/index.html"},{"revision":"b4f7bdffbd01c978b4cbfa4c8d924429","url":"./manifest.json"},{"revision":"7b8e58cd3127ce5cd40d01d3dddcd429","url":"./messageboard/index.html"},{"revision":"c1c0d537a59df9e93a921a3663b0bae5","url":"./music/index.html"},{"revision":"b41b38a0b66cbf384429025bba34e961","url":"./page/2/index.html"},{"revision":"da0d283babcbac6d362b660a71676338","url":"./page/3/index.html"},{"revision":"42d5a7a8437f02dbca56613b4bc4e0cf","url":"./reprint/index.html"},{"revision":"8134eb043ada9f2ae07fd04a7eeed736","url":"./reprint/index的副本.html"},{"revision":"2c59039461810e2d9c7819031343429f","url":"./service-worker.js"},{"revision":"7f26a6128fb5657a50423bc691f81a84","url":"./tags/Artitalk/index.html"},{"revision":"674d336c6c63d627b4e2e8fc63be1e71","url":"./tags/Exception/index.html"},{"revision":"ffabb845fe45a2bdf8438cdb322f7b5a","url":"./tags/hexo/index.html"},{"revision":"5f154fa1d40b62726207d5c10ebd0cc2","url":"./tags/index-1.html"},{"revision":"a9cef92cf83eee3f2aff926220fb334d","url":"./tags/index.html"},{"revision":"3c1fbae214e9c8f24fb97b1e31a7db78","url":"./tags/MyBatis/index.html"},{"revision":"fee10c5145b464badb3d2e4f8a524b54","url":"./tags/nginx/index.html"},{"revision":"cf25ad81dc9464e2928dc7fa1803ff9b","url":"./tags/Spring/index.html"},{"revision":"522eee57110ad24e2ad3ebad0ca33775","url":"./tags/SpringMVC/index.html"},{"revision":"bf24f68dc656223c05e05ff6dcdbee62","url":"./tags/tomcat/index.html"},{"revision":"0d398ed1c13ca778c2eca4c6593f2261","url":"./tags/字符编码/index.html"},{"revision":"0c2df9dfae3a5ddfe6038ad76233e998","url":"./tags/负载均衡/index.html"},{"revision":"21e23a14f9f3226eb77b6277e6ce2967","url":"./tags/面试题/index.html"}]);

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

// External Images
workbox.routing.registerRoute(
    /^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,
    new workbox.strategies.CacheFirst({
        cacheName: "external-images",
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
