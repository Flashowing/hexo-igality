const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "igality"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9c021123046f81fd18118bad52cc8728","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"e6e7f2395ab5181e8204559ed64af041","url":"./2020/04/08/面试题笔记/index.html"},{"revision":"d27d5c3d0013cfb5ed37d60fac84bacd","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"7854315e988f6b571d1369f0915dd316","url":"./2020/06/24/redis命令/index.html"},{"revision":"fd5953ff06e43edc5eb8f3115e48b15e","url":"./2020/06/29/博客项目/index.html"},{"revision":"f48ae669f89a7a0be2c7a5600118df61","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"06cf441ffa89b8aff45124c89954f8ae","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"0f7b71e14487646af1f45ead72beb104","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"b88d81d0d6c81eeba64c9c2ca9641afa","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"3139cef38b5b5b985d60c9c85050df0e","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"76c75ede96fa0d3851f43d3a699011bc","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"51b3f23d2b027f3b30a0abff5a6a856f","url":"./2020/07/04/hello-world/index.html"},{"revision":"cca8b4bcf1e1fedd8ba554369d1f3375","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"cbeae0a2bb02186ee5b1e17335b08dae","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"05a786ade3130be12a6135ac130a309b","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"9b7b4ce884e3857c804553890eb42d30","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"332b0f751038e162afaf323cd88e7fe7","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"a1333c65229a282ab6b35047caec30aa","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"6d5f42dbd9dfc2359fc7212fa523af42","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"ef941269b2adebe05c3668d5edcb7ea2","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"10bc5b6b83752406ffcf15a92a90d716","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"1b6860c3e4864f409c1cf415235163dc","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"257694229c6479968570861217cdd810","url":"./404.html"},{"revision":"60d6a50a9031c4ceedf61c398c72a6d8","url":"./archives/2020/03/index.html"},{"revision":"5ea407d14a1f4a4a75af1b7adcf6a4ab","url":"./archives/2020/04/index.html"},{"revision":"3eb74240439b33bbe457d3d1cc9f6889","url":"./archives/2020/06/index.html"},{"revision":"9c90df4c8c32c68906d7de427154d321","url":"./archives/2020/07/index.html"},{"revision":"73046b8915103f6fb8e9ef6a4aa6f320","url":"./archives/2020/07/page/2/index.html"},{"revision":"3180b02195b6f6165fc55e2ab65bb193","url":"./archives/2020/index.html"},{"revision":"e92a36bde86a06b49eb0782a88a4df8a","url":"./archives/2020/page/2/index.html"},{"revision":"cbd160e2ed0dfd3ef5717ba25f1c8a2d","url":"./archives/2020/page/3/index.html"},{"revision":"335d6b06923a77501e93882a85cd44c4","url":"./archives/index.html"},{"revision":"7113012d6a6b44579bd0b072560a967c","url":"./archives/page/2/index.html"},{"revision":"6a1bae8d55d7629895380f25e294e1ff","url":"./archives/page/3/index.html"},{"revision":"b738302872857aa1cabae26955819636","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"26a82c76850a5a29267de24b3894cae4","url":"./categories/Hexo/index.html"},{"revision":"6b16606598ddc86dafe30c90c03b612a","url":"./categories/index.html"},{"revision":"f4555b6b1c78c896cffa0a0eb938a986","url":"./categories/达内笔记/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"bbed34de8ae1d11b5a1915e4951fe9ba","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"87833c1789b69a2022bbd2a386e3e910","url":"./link/index.html"},{"revision":"a257f47fe977d31f0fbe97da3ba42429","url":"./manifest.json"},{"revision":"eb697eefa4993938fdd94e3498b186a8","url":"./messageboard/index.html"},{"revision":"148b43586e81fe97425555c0e5eb79c3","url":"./music/index.html"},{"revision":"66db0ac86f57e2927f8f5effefb6b9b5","url":"./page/2/index.html"},{"revision":"af746c86976713e7cba35f3187fdef71","url":"./page/3/index.html"},{"revision":"0cc28a355696b132d8db035fac87fe6f","url":"./reprint/index.html"},{"revision":"3c88fc37b4addac467b85b97fe07452d","url":"./reprint/index的副本.html"},{"revision":"baa97017b1ec0f0a83d5890fdcdd9c04","url":"./service-worker.js"},{"revision":"7b4fb4ca02fdb56323984ba03e817fda","url":"./tags/Artitalk/index.html"},{"revision":"05579152f5f4c6a79038c3e876ad61b1","url":"./tags/Exception/index.html"},{"revision":"4e46a9f355caa7e790db35b159430d23","url":"./tags/hexo/index.html"},{"revision":"cd71ffe1e154d9e1fe2ad0edeaa0134a","url":"./tags/index-1.html"},{"revision":"f7971c02e5efc8e0a64dcfcd30863cbd","url":"./tags/index.html"},{"revision":"5c787c1a929de07e4ac08bc11869d809","url":"./tags/MyBatis/index.html"},{"revision":"4fb52c394b3a85df3ccbc4585dbbdec9","url":"./tags/nginx/index.html"},{"revision":"95b830223c4d746f7672db69cf9d1f91","url":"./tags/Spring/index.html"},{"revision":"c8557452fbf85a630aa427187653ea91","url":"./tags/SpringMVC/index.html"},{"revision":"be79201367b5ae176e7b2c6697eb3e54","url":"./tags/tomcat/index.html"},{"revision":"b6a360f1c722e23c32b1d983fbaa4efc","url":"./tags/字符编码/index.html"},{"revision":"42fbddd4844a9e79ccb7d575e628c8e3","url":"./tags/负载均衡/index.html"},{"revision":"9fe21b3b12e82d4654f893d7c004dbcb","url":"./tags/面试题/index.html"}]);

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
