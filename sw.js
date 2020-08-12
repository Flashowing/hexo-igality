const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f6c2d083460da0b185830cc4f635d848","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"c705a7c811c3cad0087124e191ec7b16","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"87d41ad825e9c7c31490b3d0da41ab12","url":"./2020/06/24/redis命令/index.html"},{"revision":"555def65e79188d119b06f6405d1e0bc","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"736a755943b57967361a253b3bf0b8bb","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"cef15300ce5ab7e7d71d78780c245c2c","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"d00e3d3ec08cb8e371935cb1a8195c14","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"d1ef1089886d3f109ee0c8b933fd807b","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"d36beeba00f4d4708e2473c23405e469","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"eed2a30c74f08ec2c5676ee5fb05b1ea","url":"./2020/07/04/hello-world/index.html"},{"revision":"299732ccf51e1c4158b56074fcc10e6f","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"ecaf36b6b214ab456543e6df53b29c31","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"abc03c16dfcabdf08acf13f9ec48ba70","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"717f9af66c4bccebc3d6744fabee2ec2","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"feaf1a5e2fadd81bd12d27fb58a6a514","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"25d5598a7093c57e6ea2665e8ac793a7","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"d4738513c445d56ffec681c871443f91","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"86bb96384b40cd21cd6e543c1f21ad4c","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"60f79cf861b46d0d55b7e628307a2f7c","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"aa36508d81548af7c7c011049cb3f25f","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"5fb7afebb6ced6edc5ac1e695dc443ab","url":"./2020/07/22/Java十万个为什么(2)/index.html"},{"revision":"d445fc3915fe22fa06dea9f88b15e0d4","url":"./2020/07/22/数据库/index.html"},{"revision":"0fd26526a99d303d9a2cf9de727e762f","url":"./2020/07/22/线程/index.html"},{"revision":"5d3700e53ab7a6c74b932432f914488d","url":"./2020/07/23/面试内容/index.html"},{"revision":"1e1e91ad1fedb395cbe5fd7a63f6c0c0","url":"./2020/07/24/面试题/index.html"},{"revision":"4bedbcc995d506d63a94e64904443c74","url":"./2020/07/24/面试题笔记/index.html"},{"revision":"caf984bd8219d15ae197bc3ee1eca5f7","url":"./2020/08/03/Java基础/index.html"},{"revision":"89417caeece6be24c4ecb1680585bc83","url":"./2020/08/03/JVM部分面试题/index.html"},{"revision":"7d7f7ee9d855480e48b41c73673cfc38","url":"./2020/08/03/mybatis部分面试题/index.html"},{"revision":"c8f3d438bb37976374b7c60f1cd53524","url":"./2020/08/03/MySql部分面试题/index.html"},{"revision":"50c76179c86124ff6bf7a49922cfad7d","url":"./2020/08/03/Nginx部分面试题/index.html"},{"revision":"23769024bb9799997b0bebbcc30617dc","url":"./2020/08/03/Redis部分面试题/index.html"},{"revision":"736528e8c0f23159290e2cd30f429d04","url":"./2020/08/03/多线程部分面试题/index.html"},{"revision":"fd234b45c0cb67e91c8fb28d762d91d4","url":"./2020/08/03/容器部分面试题/index.html"},{"revision":"60023d60167c493746ca135bef7270d9","url":"./404.html"},{"revision":"b90a0c80402d72998da165413eeddab3","url":"./archives/2020/03/index.html"},{"revision":"788e90732a6dc4ef32102958bd3ce951","url":"./archives/2020/06/index.html"},{"revision":"39332e863d9455d586b4ca06a835bda6","url":"./archives/2020/07/index.html"},{"revision":"e4bcc08192ba2ecdb8043a69cb629e8c","url":"./archives/2020/07/page/2/index.html"},{"revision":"6ad1212836e3de8b2c3e12f220ee4c14","url":"./archives/2020/07/page/3/index.html"},{"revision":"ba8b96608d29a8f011ea6f0e5d4a181c","url":"./archives/2020/08/index.html"},{"revision":"44dfc775b27be8bf1d59bd84393652a7","url":"./archives/2020/index.html"},{"revision":"2d5bc0dc5173241b5d27e82d898b81af","url":"./archives/2020/page/2/index.html"},{"revision":"f57df8fabce4a4dbc69035520882ad86","url":"./archives/2020/page/3/index.html"},{"revision":"23955fb0ceadd8cd16a373917a9625fd","url":"./archives/2020/page/4/index.html"},{"revision":"c2abdf01ff4400d2b7c3aa2f59f7403b","url":"./archives/index.html"},{"revision":"89754c06e7b60cb70afe7707939c363d","url":"./archives/page/2/index.html"},{"revision":"bbe360641314349145c63d67547cdb15","url":"./archives/page/3/index.html"},{"revision":"28fcc785f917894ec6e9f84510739215","url":"./archives/page/4/index.html"},{"revision":"601e403ef49cf95c0e1a0cee86b04f7e","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"2a1860e82034a3a3dd00e9a45b18cd97","url":"./categories/Hexo/index.html"},{"revision":"caec5aa331b9a4744424fac56aecee6b","url":"./categories/index.html"},{"revision":"c422cb3673af27ba2b3c81f59f28e348","url":"./categories/达内笔记/index.html"},{"revision":"2faa2db3025b455e6401f412f458c1d2","url":"./categories/面试题/index.html"},{"revision":"ac6b8515827b9f6937ceba7da5d03eda","url":"./categories/面试题/page/2/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d6a072e81c56f8f2e93c1184cb6cd9ea","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"9053087faf2e7d5fb01397ff02f0017d","url":"./link/index.html"},{"revision":"a257f47fe977d31f0fbe97da3ba42429","url":"./manifest.json"},{"revision":"3c4000b87c42c311349466955840dc71","url":"./messageboard/index.html"},{"revision":"789ca7a41046bc73ad4288634b5f9cf2","url":"./music/index.html"},{"revision":"293f13d17dac9e0a7af61ea5f24166ff","url":"./page/2/index.html"},{"revision":"7d4fdf2426a10efe65d4da69a862a3e2","url":"./page/3/index.html"},{"revision":"59d506ee7104f143a0f98340849d6db8","url":"./page/4/index.html"},{"revision":"d8d4848aa16d799a3c7f9d07f19c2fa3","url":"./reprint/index.html"},{"revision":"41d7bfe33cbc6a701f0dc2a9e112335c","url":"./reprint/index的副本.html"},{"revision":"fa515735638cc4b46f53f32c908bb872","url":"./service-worker.js"},{"revision":"96c44d1a47db0d5763627a1f6079d571","url":"./tags/Artitalk/index.html"},{"revision":"0259bcfaf133f731086f01a8b0be0c10","url":"./tags/Exception/index.html"},{"revision":"b00ae1b62805bb0531b96ba93d7c7593","url":"./tags/hexo/index.html"},{"revision":"3702690cb5c6538cea0bc91f05dcb020","url":"./tags/index-1.html"},{"revision":"635535e14c1e4a9911190b7129443e75","url":"./tags/index.html"},{"revision":"1b63fecb29c6a4d0fbb78a32ad5b3da9","url":"./tags/MyBatis/index.html"},{"revision":"9bf94b0e8e89fa5262ad1af21f7bb6ac","url":"./tags/nginx/index.html"},{"revision":"1bd698f17ad97e0dd6ca922bb64a5a84","url":"./tags/Spring/index.html"},{"revision":"c2f8b04613d7773a11e4bcc2372a9b6f","url":"./tags/SpringMVC/index.html"},{"revision":"4b97a81d61ad558a9971ad6fbe1b5d9a","url":"./tags/tomcat/index.html"},{"revision":"0c30ee01c49d7e68ada9e30734de8606","url":"./tags/字符编码/index.html"},{"revision":"7e553c98462b09f95036d2775cdd76c2","url":"./tags/负载均衡/index.html"},{"revision":"31a9049bca546ca4bfc78445e4af4f45","url":"./tags/面试题/index.html"},{"revision":"99e5f6d25d4e709bdf3401270dc666d8","url":"./tags/面试题/page/2/index.html"}]);

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
