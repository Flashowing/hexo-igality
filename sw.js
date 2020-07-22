const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "igality"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1b5d7cd2b9a8ddc83ed1c9199d2e2162","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"3a96eb5cd554e1131f5fdbbe509c003e","url":"./2020/04/08/面试题笔记/index.html"},{"revision":"10c3a9357f1d77e194462e9b71378869","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"3b9a197e4b9d04d410828593c6dd3419","url":"./2020/06/24/redis命令/index.html"},{"revision":"72c543634efa7d937573923d653c53ca","url":"./2020/06/29/博客项目/index.html"},{"revision":"5a9b19605318502bc52e5dda290615fc","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"c97de4698dcf9646f8c730afbe2e0f18","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"1c559f6fca1e35cd12d8d14c1f4bd09e","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"aa8deff073b4ede9a275ef0b976d920d","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"8db4861381b5e4b7c33f4dc7a50ed4fa","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"fc1c7273278ee182f999337df3e341fc","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"c26cf89e012aaa588ff43c4d1c897159","url":"./2020/07/04/hello-world/index.html"},{"revision":"61e87ea99ad7b80f879de33b6a2915da","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"edcfcd74005cbeafb9fdcd38b6a755e4","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"0e54ae991ed70e1531a2be15299b6b3e","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"96c1c3d9da7f3693f7712eef2d2ec2a9","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"97033fed5631ffe9ab4757fa22961496","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"0921f23e22d86fa3307fdfd64d86272c","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"a0885bddedaffb662a99f76db20ef1cb","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"9ead6deaf3e3d30d3cc3089aebe629b6","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"397b308d58386d9be2e6a51a40c9aad7","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"cb40b6f50e4e9fbe6a35881fd066b7b0","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"819aa3bf1e31afe40957a021eadbd171","url":"./404.html"},{"revision":"5cc525ced0c45faf1d89f0477967435b","url":"./archives/2020/03/index.html"},{"revision":"7739df4f599bf11c883fc0d15e4471a5","url":"./archives/2020/04/index.html"},{"revision":"573801953dde1db272a4ddf4953aeb8d","url":"./archives/2020/06/index.html"},{"revision":"ab7d735ac8e3b6f271e6cc3bc58da633","url":"./archives/2020/07/index.html"},{"revision":"d80c4a8ba390642b8ad7821858119004","url":"./archives/2020/07/page/2/index.html"},{"revision":"5d6e8093e88600f5d8bd858d9cfd6483","url":"./archives/2020/index.html"},{"revision":"322bdfc0fac5de0758986e1d5160ba2b","url":"./archives/2020/page/2/index.html"},{"revision":"4bc08486370ffdf2ffc99f5af6a3a937","url":"./archives/2020/page/3/index.html"},{"revision":"8c7bfa044f973510771a679f10247d65","url":"./archives/index.html"},{"revision":"e1892667a7360845772f91a5870bb340","url":"./archives/page/2/index.html"},{"revision":"ff94c0e35a1594e8d6ba54136f8ffafd","url":"./archives/page/3/index.html"},{"revision":"c282fa818b473b5a2f9a62b3b8cc6a79","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"ec88ca325d7ca0491754249a4d5c6aa7","url":"./categories/Hexo/index.html"},{"revision":"a74264660d03d9ec21620d28e4bbbb3c","url":"./categories/index.html"},{"revision":"24d287e5947947e77949808daa18c075","url":"./categories/达内笔记/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f7216af5bb8af57060c6907468ec6fbb","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"af6990b31e3bd2ab59b8ba6e8f639e86","url":"./link/index.html"},{"revision":"a257f47fe977d31f0fbe97da3ba42429","url":"./manifest.json"},{"revision":"ab0262ddf1191efa33c69ec022248297","url":"./messageboard/index.html"},{"revision":"d7a6865e96e52bbf7ca4aa9084738d82","url":"./music/index.html"},{"revision":"e8fb80b4796226ee4d79df1011810688","url":"./page/2/index.html"},{"revision":"5e3692631bf828dcf45460016f0dae10","url":"./page/3/index.html"},{"revision":"7527c99aac9a6ed109369d036205d2ed","url":"./reprint/index.html"},{"revision":"73cdb17eabbec930cb0dbf542e745bd9","url":"./reprint/index的副本.html"},{"revision":"134b6b9adfbdeae94e5fec7625e870ca","url":"./service-worker.js"},{"revision":"cd4a96c1b4cd1884ea1a5d64d5372459","url":"./tags/Artitalk/index.html"},{"revision":"f3624da4c862dd52d320c72480b39419","url":"./tags/Exception/index.html"},{"revision":"b86e448aea5347eda2f6442d06efd2d4","url":"./tags/hexo/index.html"},{"revision":"45538685d1a3720ffc6a97d1cddcca6c","url":"./tags/index-1.html"},{"revision":"f44ff9455502e1286b8374d781986baa","url":"./tags/index.html"},{"revision":"8259c2f47296a5e608ae080693685f35","url":"./tags/MyBatis/index.html"},{"revision":"cd069b9a14d9e5558351dffc1e37a340","url":"./tags/nginx/index.html"},{"revision":"614b380bb2df1944b3fe70bec5365427","url":"./tags/Spring/index.html"},{"revision":"545506fe3ffb8a9d638082d69279990f","url":"./tags/SpringMVC/index.html"},{"revision":"18720b4c440a63b5173dbb101b66f8fd","url":"./tags/tomcat/index.html"},{"revision":"07b11f24656f614d6dfd1355e40ead6f","url":"./tags/字符编码/index.html"},{"revision":"5ea2b1e5f579c021fdb74d4214cbe9b9","url":"./tags/负载均衡/index.html"},{"revision":"57278bac6ba2f443e9d9d5b74e19b1e0","url":"./tags/面试题/index.html"}]);

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
