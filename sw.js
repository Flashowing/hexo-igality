const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9e387459827954e4faef187a6f4c5050","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"aa13ff412a4bc068c83f0356a7c3b5fb","url":"./2020/04/08/面试题笔记/index.html"},{"revision":"52a11f5677edbbd42062297171b4a373","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"f4f38aa3e60e16f8b86ef353e9b640b3","url":"./2020/06/24/redis命令/index.html"},{"revision":"19b3c60ceb09cca900e089e7bf90a47b","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"2e49459e12d20ac6679aa09143f2e9d5","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"10bad4087035826bba1e9dd62fd49e82","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"3876d99fcb52b0e9feb2215c5b29bf76","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"caf4f9e74a6d3dedff47e2a719ab0db1","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"b8eb92c7e9747b6d70ba0cb269fe0a1a","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"fc289d8a156116ee7c268d8fa8424544","url":"./2020/07/04/hello-world/index.html"},{"revision":"b0335c247b1cf83539cb2da9a2c801da","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"4bcd5bac367a302139c06e7206d0f294","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"f52e974a09913d89d27176e44fa376e5","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"dc5138a759b989472df20ae8c7de020c","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"8bdeecbcca19c549ad9da889f6dff54f","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"38904ff9ef72302e8a7f6a60aba15e1b","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"ee8943bafb0384064625e24bf261bb3c","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"4d521044cbda6064b86a75130ba3094f","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"9d62a8e1b458b909010d5b5666ad0b2d","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"a928c0956377c86d979335484fd241fc","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"a4abfc00cd12b34793f0bb19f849eeac","url":"./2020/07/22/博客项目/index.html"},{"revision":"068f3c4f484f2c626b9a3c01046672e1","url":"./2020/07/22/线程/index.html"},{"revision":"3881301f1ff04454b8ce66d78c766a46","url":"./404.html"},{"revision":"f003be5d2fce06f0a17796e33b21c6f9","url":"./archives/2020/03/index.html"},{"revision":"29051d22fb491399d2468b08fb93d26f","url":"./archives/2020/04/index.html"},{"revision":"3e634d72b69d1a27736011b287ada19f","url":"./archives/2020/06/index.html"},{"revision":"db8181af3570b937351472e9c329d30e","url":"./archives/2020/07/index.html"},{"revision":"e42532b081091b3a9eef15e18fb9c7e6","url":"./archives/2020/07/page/2/index.html"},{"revision":"1e363dc01a9d0e0339e7bd09f0a2869d","url":"./archives/2020/index.html"},{"revision":"20a53863071b75039c20cb61caebfccd","url":"./archives/2020/page/2/index.html"},{"revision":"20d6c3f97337208e590330a85df3ebf1","url":"./archives/2020/page/3/index.html"},{"revision":"49f001e49d3c59cef1026fbc6ca43ff9","url":"./archives/index.html"},{"revision":"7366a38eb3fc81d22171a98e3fecfbfe","url":"./archives/page/2/index.html"},{"revision":"f5f3cbe15a45bef7bb6b77fb63f8e814","url":"./archives/page/3/index.html"},{"revision":"14bae483364461b1c05f47a9e6033ad3","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"815ebd2a87d9b14f177665ab5d3c250d","url":"./categories/Hexo/index.html"},{"revision":"a6458a39ad5bef6f5d59dad00f20d71f","url":"./categories/index.html"},{"revision":"a67fc907ccff2e41410bef0d574f3235","url":"./categories/达内笔记/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9452f41c0d0abe24959e9ea0031d44c2","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"3dfd6a7b225937edf58dbc9fcad37bb0","url":"./link/index.html"},{"revision":"b4f7bdffbd01c978b4cbfa4c8d924429","url":"./manifest.json"},{"revision":"de5f2a1efc9f656dedf4d28c1d57c709","url":"./messageboard/index.html"},{"revision":"c9745f61c2fea147de73536e6db20210","url":"./music/index.html"},{"revision":"6ec999851aec0afa509dff59c663516b","url":"./page/2/index.html"},{"revision":"841d410fdfd5a6ef5327b28a6951e9a0","url":"./page/3/index.html"},{"revision":"3d4d22dcf8e85d33b12bbb3a9a2e5bd9","url":"./reprint/index.html"},{"revision":"406400d3785a3b25a8b0f805a28c4200","url":"./reprint/index的副本.html"},{"revision":"04f8107e07bcc7bb5df570c1d06ccca1","url":"./service-worker.js"},{"revision":"6b8cc8333b1a9a4e1f7abf3172388515","url":"./tags/Artitalk/index.html"},{"revision":"81e2db27cd6f85daf95d7dad13a16029","url":"./tags/Exception/index.html"},{"revision":"513e300f4ae3f7d321fa88871fd16a19","url":"./tags/hexo/index.html"},{"revision":"d8b1cad2209f0bf770db92839789f8e3","url":"./tags/index-1.html"},{"revision":"a3ea86388d1acf0bbd4faae8fe9078d4","url":"./tags/index.html"},{"revision":"cb35bf5554f2bee05af10ca0094f21f8","url":"./tags/MyBatis/index.html"},{"revision":"0223c340b3fdd131b02c9032f6b6c56f","url":"./tags/nginx/index.html"},{"revision":"25de49bb304e79adffbe844e6c4c4f03","url":"./tags/Spring/index.html"},{"revision":"9e19d946471a073d6b81c28b1b1801e7","url":"./tags/SpringMVC/index.html"},{"revision":"889317cb014844e70decf5cf1dd1e13b","url":"./tags/tomcat/index.html"},{"revision":"585e18c603f31f423900510736ab1df8","url":"./tags/字符编码/index.html"},{"revision":"cca51abb7d06c0f93bf2f693cca0de2c","url":"./tags/负载均衡/index.html"},{"revision":"80eee0efab40468588a4f87364cc670e","url":"./tags/面试题/index.html"}]);

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
