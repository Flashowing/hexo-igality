const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "igality"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"da2ab972524d310a1b86661ac33854fa","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"073b038fb9fc7956566cd570ccc56577","url":"./2020/04/08/面试题笔记/index.html"},{"revision":"8d02bd5ba38c1498b3b4dfcf219b7cf0","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"2cfadb9160a192c9e20a5793dd379315","url":"./2020/06/24/redis命令/index.html"},{"revision":"67aa2c4763cc2f0f034c22cb649c9d45","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"0145dc0629bf82258e06b5a4b4674954","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"f6251934cd851c4fb331b00fdbb1df69","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"e998ffe013e777b957de1fbc395740a1","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"3c8c145806e654bd30458df2df8a492b","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"e3789160d3ab2c87734dc1fce50ccd1a","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"6147695ef88fdf4320df7b7a408bfd7b","url":"./2020/07/04/hello-world/index.html"},{"revision":"ed0a4dfb9556d364c45800e4112a8716","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"bff114152d6623548a56c37903dd326f","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"974fc9c98f309e8d5eebbcc1bac6e037","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"990ef4b2d78147553287069a0d8af975","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"d23b053b0ae5d7bf4b18fe4fbd23ac00","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"6dcadd28ef91d0c600fe1e1902d3cb9e","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"ff9243d6c13cf3916a761afdad69b7e8","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"eb2dcb160ab0a91bafd788510d21d5ff","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"9f1636231a408bcc8fbf8d5bf062b4ef","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"c554e8a3b8443113941821b126bfcd0b","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"a4abfc00cd12b34793f0bb19f849eeac","url":"./2020/07/22/博客项目/index.html"},{"revision":"068f3c4f484f2c626b9a3c01046672e1","url":"./2020/07/22/线程/index.html"},{"revision":"d540887f2db6df9a00748651b0e976cd","url":"./404.html"},{"revision":"c3315028d46cb475326101a3a9caeb04","url":"./archives/2020/03/index.html"},{"revision":"972f2da492475665aa692b5bef9c46b0","url":"./archives/2020/04/index.html"},{"revision":"1f43bc50b942083ffa2ed0accf142db3","url":"./archives/2020/06/index.html"},{"revision":"ae8ccf8b5bca80fb25d11807a83f46f3","url":"./archives/2020/07/index.html"},{"revision":"440ef102a568db95bec0c9331f617f23","url":"./archives/2020/07/page/2/index.html"},{"revision":"01d826508a4651a8c4c868b31aacaa1a","url":"./archives/2020/index.html"},{"revision":"aa4679231eba770f738319bb8d17c614","url":"./archives/2020/page/2/index.html"},{"revision":"f6d977f6dcfa2dcf38affae8ba5533ae","url":"./archives/2020/page/3/index.html"},{"revision":"56e8bd6532a789f9c539c3dd091b1df5","url":"./archives/index.html"},{"revision":"ea06f7b4fbcc7e5e0cbf7649a5141056","url":"./archives/page/2/index.html"},{"revision":"0711248021f013c0ad22469671e68ec9","url":"./archives/page/3/index.html"},{"revision":"14bae483364461b1c05f47a9e6033ad3","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"eddf95f34eceda68f9253ea5a08f798d","url":"./categories/Hexo/index.html"},{"revision":"ae81556e11e9c494aadbd857c86671e0","url":"./categories/index.html"},{"revision":"6e4ed6b71bcc716abe552e7280e63247","url":"./categories/达内笔记/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5debad13d318055898dd121a765f6f72","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"3dfd6a7b225937edf58dbc9fcad37bb0","url":"./link/index.html"},{"revision":"b4f7bdffbd01c978b4cbfa4c8d924429","url":"./manifest.json"},{"revision":"de5f2a1efc9f656dedf4d28c1d57c709","url":"./messageboard/index.html"},{"revision":"cecfbc66a65bcbac7600582c134aebf3","url":"./music/index.html"},{"revision":"e1c9e83ff3b0288dd769136db6b7cd5c","url":"./page/2/index.html"},{"revision":"e0a9055c7447a2cae535777c58f5612a","url":"./page/3/index.html"},{"revision":"1666ad309fdcf4ce86c5fa6d523e6de0","url":"./reprint/index.html"},{"revision":"f296280e6e807af1df0d72f66b28b0a5","url":"./reprint/index的副本.html"},{"revision":"e0e4edd0c29d4cf7fd1a7fde048fcba0","url":"./service-worker.js"},{"revision":"09c3bac8f8977350f00eeccada05766d","url":"./tags/Artitalk/index.html"},{"revision":"c0ba789dc9ac466963e01e1514635d63","url":"./tags/Exception/index.html"},{"revision":"a9b6f6f2d3e8ac77796ed3cf64c9fc15","url":"./tags/hexo/index.html"},{"revision":"d8b1cad2209f0bf770db92839789f8e3","url":"./tags/index-1.html"},{"revision":"21729e8dc358ce0ac6afb9b65589e57c","url":"./tags/index.html"},{"revision":"e410b4e309adf3f6e5d07bbe706bbb11","url":"./tags/MyBatis/index.html"},{"revision":"7abce8466bdd97c71d2abf625563e580","url":"./tags/nginx/index.html"},{"revision":"31f2b5c2aa1fcaf16d64e9d3680e1efd","url":"./tags/Spring/index.html"},{"revision":"e7c2b9eb2246be28ad90a02660d5e16e","url":"./tags/SpringMVC/index.html"},{"revision":"b66dc0b25b88730961e542575656b78d","url":"./tags/tomcat/index.html"},{"revision":"71d5ed4e2a708dfef54e31e3df6d3981","url":"./tags/字符编码/index.html"},{"revision":"5af987621f34a2a9ad0e2142de8d0d8f","url":"./tags/负载均衡/index.html"},{"revision":"52c44c9700f04f3716fd7e44530c4cb2","url":"./tags/面试题/index.html"}]);

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
