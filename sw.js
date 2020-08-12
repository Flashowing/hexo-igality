const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5ee6f2511effc8fcfae98ab961776725","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"7b21c0dd954d19ee8642565c69818edd","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"f56798315ee538b91646870adbf38a73","url":"./2020/06/24/redis命令/index.html"},{"revision":"982cae3100a6cdf54e8ea2cbadb8e6e5","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"c83f490544339e94db83103ba6042a43","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"470ec7504fba4b04cded3db7a1ee2f56","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"7b907a62f365b9e16b1e357bd05df0d1","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"f4bf64ecfd76ee80b9dec234b5bd4bae","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"7f85ced0eb8d4b60131ec02954762107","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"c0e7b75c71d0a74d2517abcc1cb4c981","url":"./2020/07/04/hello-world/index.html"},{"revision":"ce095ed35050154e51dc814ee3e784e9","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"f65b22a8df440fc0e26a429185562fbb","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"e87c6aa5a3e40651282f37c59febe914","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"747dceec049f1504245e60f9a0cb1411","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"d832b311398dd35c4773929930da293f","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"2764c73c993ddd77048cfd923051f6a2","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"cf8c3bca878cfb7786e9139804e52c9a","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"e71cc426f0534421dfc9554d5de55164","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"e208a13860f4329d29528cdcb2dbff62","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"f559625343a063ae7ad366be15c17839","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"5dc9754b5c33742eac6a246a634c74c9","url":"./2020/07/22/Java十万个为什么(2)/index.html"},{"revision":"e5064866d8a11d1aa347887ba356cd90","url":"./2020/07/22/数据库/index.html"},{"revision":"94803d46ddb959e54b8bc777d9035dff","url":"./2020/07/22/线程/index.html"},{"revision":"e6991e108ec77e334b5d90763831f32b","url":"./2020/07/23/面试内容/index.html"},{"revision":"7dfea3bbeac43bce3c6f938519262cfc","url":"./2020/07/24/面试题/index.html"},{"revision":"409cf4234f1d967bb8524b8677d828f1","url":"./2020/07/24/面试题笔记/index.html"},{"revision":"eb96f27bf36562dc3f0830d26df18e89","url":"./2020/08/03/Java基础/index.html"},{"revision":"0bef3721a37a0b10a0b48eb9cdcf361b","url":"./2020/08/03/JVM部分面试题/index.html"},{"revision":"b0145d23a6ed2565ba6ff366bf588535","url":"./2020/08/03/mybatis部分面试题/index.html"},{"revision":"e823ce8ae93b1d8af0e91cac34222449","url":"./2020/08/03/MySql部分面试题/index.html"},{"revision":"afcd71ab8003698eca40d3482f4f5f56","url":"./2020/08/03/Nginx部分面试题/index.html"},{"revision":"4eafe9ed99f591d179d6ba88305659bc","url":"./2020/08/03/Redis部分面试题/index.html"},{"revision":"abfdbac65dbb624679cdec751fc246c6","url":"./2020/08/03/多线程部分面试题/index.html"},{"revision":"65d81248f5a493418d931aadf568b02d","url":"./2020/08/03/容器部分面试题/index.html"},{"revision":"3c3f9fe5595ffc045a9a78a730b48dd0","url":"./404.html"},{"revision":"bef39c8e3eca39fb433b504a0fd62aa5","url":"./archives/2020/03/index.html"},{"revision":"aa1efe0308bd52e9e896f80fa9caddf3","url":"./archives/2020/06/index.html"},{"revision":"072d3724faaa4f341b4e5ad4f88618e8","url":"./archives/2020/07/index.html"},{"revision":"30a2e3054b5b312bb81d02f4160a9a7a","url":"./archives/2020/07/page/2/index.html"},{"revision":"4ca1173e9b590f195682dfdeb5e95c1e","url":"./archives/2020/07/page/3/index.html"},{"revision":"7392bc7496cbd2f01ef9220268760c21","url":"./archives/2020/08/index.html"},{"revision":"3c6a2b7d2db5d14505c95f6e4947770e","url":"./archives/2020/index.html"},{"revision":"7b7e002eb95893191a50e8ff5b992bbd","url":"./archives/2020/page/2/index.html"},{"revision":"85dd770bcde1ef2a4804b0ea54cd6317","url":"./archives/2020/page/3/index.html"},{"revision":"9e9027f247344f9c6d00972d389a4f2e","url":"./archives/2020/page/4/index.html"},{"revision":"c6c802263e8aa2dd68dacdb2a1a3d9a8","url":"./archives/index.html"},{"revision":"cd98192d654149cac308189f72d3a83c","url":"./archives/page/2/index.html"},{"revision":"11818385be1820c61405d347f2b5a59e","url":"./archives/page/3/index.html"},{"revision":"cac50b42642839108a6721be6408eeea","url":"./archives/page/4/index.html"},{"revision":"601bad96ccce71f93688f7101842e404","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"65620b0115f82491705ce34081ab0edf","url":"./categories/Hexo/index.html"},{"revision":"1863fffbd97e4df7eb3a35836c5302ff","url":"./categories/index.html"},{"revision":"8c61357b35505a704777d5ed97aa43bc","url":"./categories/达内笔记/index.html"},{"revision":"e7bf1db055be11d899f9155f90169af6","url":"./categories/面试题/index.html"},{"revision":"6289f1fd293543bd5a48d0b199be5e72","url":"./categories/面试题/page/2/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e1fa2e54a2df8922be3c05052cfbcb12","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"f60eb5cc2bebacaaa303502dd34615aa","url":"./link/index.html"},{"revision":"b4f7bdffbd01c978b4cbfa4c8d924429","url":"./manifest.json"},{"revision":"6e05eb2c988a00d7a93bb499634736c2","url":"./messageboard/index.html"},{"revision":"30aead83da81f314214c0bdbc09978ab","url":"./music/index.html"},{"revision":"738f7de777bae4d5b9fd95e2a9c43fc6","url":"./page/2/index.html"},{"revision":"3c9801fbb92bab678655cba68daad7db","url":"./page/3/index.html"},{"revision":"dcefeaf9a0c86922034f2405b9be2bc4","url":"./page/4/index.html"},{"revision":"0221c85c92897725e45bec341677a47d","url":"./reprint/index.html"},{"revision":"18b4989ed4992273a9efc6cc900276fa","url":"./reprint/index的副本.html"},{"revision":"8740c7652477f0f411de3635dc41f693","url":"./service-worker.js"},{"revision":"8bab0b87da08e59fef997068536e65f3","url":"./tags/Artitalk/index.html"},{"revision":"4f1a7ce43820076f2ddd9b848438d2e5","url":"./tags/Exception/index.html"},{"revision":"21c356561adfdfa1ce83389a71db6bba","url":"./tags/hexo/index.html"},{"revision":"fc0bd241de0b7ba222a5d9fb90b20135","url":"./tags/index-1.html"},{"revision":"e52940cf93537c20863f89bdeb7edac6","url":"./tags/index.html"},{"revision":"70ef5e63f4908c0377a68e23318e4920","url":"./tags/MyBatis/index.html"},{"revision":"70da004c53de2fc26eebb274ea10863e","url":"./tags/nginx/index.html"},{"revision":"66ad93c0f0b01130cf3923061c27a884","url":"./tags/Spring/index.html"},{"revision":"44cf6652b0ae309325fcce24b065ecef","url":"./tags/SpringMVC/index.html"},{"revision":"ea08c236cfef801a652ad95b8193a2db","url":"./tags/tomcat/index.html"},{"revision":"d25a4d89c6d5b92f027447c3fd284b7a","url":"./tags/字符编码/index.html"},{"revision":"8b94dcebebe9c5d17c2a1f4e747399a2","url":"./tags/负载均衡/index.html"},{"revision":"dbccb6505347c3e38336090f64accb8b","url":"./tags/面试题/index.html"},{"revision":"16bb9514d45db05e68e253a6dec6d4aa","url":"./tags/面试题/page/2/index.html"}]);

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
