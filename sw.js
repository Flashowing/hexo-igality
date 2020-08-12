const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"63d9722d99cd69430af33e3276c82ac0","url":"./2020/03/30/Java十万个为什么/index.html"},{"revision":"cd4c5a38154296be598c4c9e9d13e4d3","url":"./2020/06/24/linux防火墙常用命令/index.html"},{"revision":"a3d14709e98f525cfc351ceb44faaf32","url":"./2020/06/24/redis命令/index.html"},{"revision":"a7cb8a5bc930c7377ff6a85609ec6ad1","url":"./2020/07/01/07_SPRING_DAY01/index.html"},{"revision":"37dda07fc004b9169326f5bba4402ca8","url":"./2020/07/01/07_SPRING_DAY02/index.html"},{"revision":"6062bcc2706acdb5d6715c84fb227410","url":"./2020/07/02/IntellijIDEA快捷使用/index.html"},{"revision":"49d2fbbb033aeecdd962f7fba70572c3","url":"./2020/07/03/07_SPRING_DAY03/index.html"},{"revision":"18becb9a552fcc2f11bcee2b3cdda804","url":"./2020/07/04/08_SPRINGMVC_DAY01/index.html"},{"revision":"1a29e703525694e620dbacb975633d89","url":"./2020/07/04/08_SPRINGMVC_DAY02/index.html"},{"revision":"f23b5acc8820b135fb990b6887063124","url":"./2020/07/04/hello-world/index.html"},{"revision":"8918383aa5906adae65317733b2a957c","url":"./2020/07/06/08_SPRINGMVC_DAY03/index.html"},{"revision":"3fd74bd00bf0a0a03acf96097d5d2cd9","url":"./2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html"},{"revision":"6c63943ed3fe0154b7eaaf2c3bd3b563","url":"./2020/07/06/tomcat去掉项目名/index.html"},{"revision":"14fc0474aecc3bb8a82b591cbe73931a","url":"./2020/07/08/09_MYBATIS_DAY01_1748/index.html"},{"revision":"66bf78301741a4f96dcaa24cf32f2443","url":"./2020/07/08/09_MYBATIS_DAY01_PLUS/index.html"},{"revision":"22eb1913829fd7747c589012e254914e","url":"./2020/07/08/09_MYBATIS_DAY02/index.html"},{"revision":"67503c7a50e496bd9830b74b99de3613","url":"./2020/07/10/09_MYBATIS_DAY03/index.html"},{"revision":"1fd9c1e60940d6ed6bd0be7079a1984e","url":"./2020/07/11/使用Artitalk为hexo添加说说功能/index.html"},{"revision":"a36f8d5da4a217ee5d229896c9ff9082","url":"./2020/07/17/2020-07-17-Hexo问题解决/index.html"},{"revision":"435bd102a1ed32af85a9ab67dc5c1545","url":"./2020/07/20/网站建设方案书/index.html"},{"revision":"b97e8d2ff838626baf40092d1a791d8b","url":"./2020/07/22/Java十万个为什么(2)/index.html"},{"revision":"d05d56998693b4daefcf90cea528cfb3","url":"./2020/07/22/数据库/index.html"},{"revision":"deaeed2e85e7c67ccb13bbfb0e2e658e","url":"./2020/07/22/线程/index.html"},{"revision":"26402ff1eaf8a7ce841349a0e747136a","url":"./2020/07/23/面试内容/index.html"},{"revision":"a6ffa00947b1ccb4f25fb2c858c1ba2b","url":"./2020/07/24/面试题/index.html"},{"revision":"a5074299ae222d374407bc2277fdd232","url":"./2020/07/24/面试题笔记/index.html"},{"revision":"0b429f0a1e35f5eb2fb6457a4e5a1d5e","url":"./2020/08/03/Java基础/index.html"},{"revision":"4bb6d5a04e7f2442bad7d4df755be291","url":"./2020/08/03/JVM部分面试题/index.html"},{"revision":"8da2ad34c897e58acaed651e6b7dbf51","url":"./2020/08/03/mybatis部分面试题/index.html"},{"revision":"4c50c7386d389368dfbeab105bdeb81a","url":"./2020/08/03/MySql部分面试题/index.html"},{"revision":"68e732a1457c1a7e7706a59ad6c15756","url":"./2020/08/03/Nginx部分面试题/index.html"},{"revision":"17644db3a5b2a7af871aa63effad2fd1","url":"./2020/08/03/Redis部分面试题/index.html"},{"revision":"06d4aa9dccbe6243555a8dd8a8f691af","url":"./2020/08/03/多线程部分面试题/index.html"},{"revision":"4922082365fb1f073684172980e290b1","url":"./2020/08/03/容器部分面试题/index.html"},{"revision":"d0810657517e8f35a460aabfecc5f628","url":"./404.html"},{"revision":"34f0a2d7de1b839b2c07431a255bc1b0","url":"./archives/2020/03/index.html"},{"revision":"47dd0d378b08e45bb210efe908ef8c5a","url":"./archives/2020/06/index.html"},{"revision":"1df0c9edfa22e4c2a11d21cf9b0a5203","url":"./archives/2020/07/index.html"},{"revision":"4825991589e50415164e9c9a84b3b6df","url":"./archives/2020/07/page/2/index.html"},{"revision":"95b7f1ab8089f8c110b118dc327098cc","url":"./archives/2020/07/page/3/index.html"},{"revision":"d70f46bf78b0c3c819ee9ee3a3e17f43","url":"./archives/2020/08/index.html"},{"revision":"5549d3f8618fe0dde4a239ff0b3668fc","url":"./archives/2020/index.html"},{"revision":"da69cd10ea02d21ee3d3b92c34838018","url":"./archives/2020/page/2/index.html"},{"revision":"11c40f8ced95f9192db2e29247a30917","url":"./archives/2020/page/3/index.html"},{"revision":"3816b6f89dde87163e3f2ec22e228204","url":"./archives/2020/page/4/index.html"},{"revision":"9be8584b9e643fbeeb16c3c73decdb72","url":"./archives/index.html"},{"revision":"eebddb432375d69321f6966c7821b4b9","url":"./archives/page/2/index.html"},{"revision":"cb4f38832eb05b21dd0249bb3157f6a6","url":"./archives/page/3/index.html"},{"revision":"0dfd20f19d984d6dff6a9782add70812","url":"./archives/page/4/index.html"},{"revision":"49f5f36dfe4f8b25a83b1d0e7289fe1d","url":"./artitalk/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"a2589e1ec6fd3b5ffccb2050655ac6f2","url":"./categories/Hexo/index.html"},{"revision":"267c46910e5cd42694da4a84bcceb4cd","url":"./categories/index.html"},{"revision":"c84b360fcbb4649cacbafdf5fc44fe79","url":"./categories/达内笔记/index.html"},{"revision":"c92ad8433b33fe595359a902e2901532","url":"./categories/面试题/index.html"},{"revision":"ab2d7af2be6d33ebcb8e92537be6f47f","url":"./categories/面试题/page/2/index.html"},{"revision":"7be29b3ddf4e4c10cafac465c8a3318d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"879677ef5279b4d46d2bcda2eab70b41","url":"./index.html"},{"revision":"1eb3d905f8d4f15804fc050b7cd49373","url":"./js/main.js"},{"revision":"fde9b8fefca51cc039ed4c0c2d2c34f0","url":"./js/search/algolia.js"},{"revision":"271777e2b46e5743942ca9ac31baff15","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"bb643bd9c2ac59f6ce2a1251b8014624","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"080fdfcacffc6828826484645140af50","url":"./js/third-party/fireworks.js"},{"revision":"6df6ba5f90c4dff026fc3eea73933e8b","url":"./js/third-party/piao.js"},{"revision":"65f69c7060c833d42ffaabe5c95bb010","url":"./js/tw_cn.js"},{"revision":"f2f712d5d52625b377855945420eea15","url":"./js/utils.js"},{"revision":"ebe83640b7f3999c5d5b72dccd08ecf1","url":"./link/index.html"},{"revision":"b4f7bdffbd01c978b4cbfa4c8d924429","url":"./manifest.json"},{"revision":"0fd3d15783a411715d4b43694b8880c6","url":"./messageboard/index.html"},{"revision":"63f9465f4dfb7e4bfe985d4363f0b2f6","url":"./music/index.html"},{"revision":"14e53b5f0ffe0ae906d4e9acb022fe05","url":"./page/2/index.html"},{"revision":"6a0291d8eec8869b59211c23363edfcc","url":"./page/3/index.html"},{"revision":"5f0905679a6c65b63d807c54232495a2","url":"./page/4/index.html"},{"revision":"1b715089d28e747f5e465ce695356902","url":"./reprint/index.html"},{"revision":"880b34bb443b88afdc58953bcf003e1a","url":"./reprint/index的副本.html"},{"revision":"2b435be14d2ce4a6b747f8b820803248","url":"./service-worker.js"},{"revision":"e31498a303908447c962d50bf52639ec","url":"./tags/Artitalk/index.html"},{"revision":"47d1bb271c034d8bf89c428fc1eb77d5","url":"./tags/Exception/index.html"},{"revision":"b8eed0b6d5c622a017121f1dee146c82","url":"./tags/hexo/index.html"},{"revision":"482c778ccfa73593f9cec1bb3cfad7b8","url":"./tags/index-1.html"},{"revision":"5c4ac7d1f3a4c34f688e6cb0fd9bb2a9","url":"./tags/index.html"},{"revision":"c7190e1b005bdffda34afca55e70b5d0","url":"./tags/MyBatis/index.html"},{"revision":"d971c72bd4f3864c6dbf0f564df39c3d","url":"./tags/nginx/index.html"},{"revision":"d464c3347c84833ab60a6daa28380eab","url":"./tags/Spring/index.html"},{"revision":"2e0bcb9e5a74166e69ab9856a61c1b87","url":"./tags/SpringMVC/index.html"},{"revision":"2cf564cc40c08bf63691d3a1575316ac","url":"./tags/tomcat/index.html"},{"revision":"969b339576150964669aeec896ec368d","url":"./tags/字符编码/index.html"},{"revision":"118c5277b61e922c392e7e0fda911103","url":"./tags/负载均衡/index.html"},{"revision":"c56558788a83c335561281d9448233c8","url":"./tags/面试题/index.html"},{"revision":"396035187ae686f6188e3a465fd4ea64","url":"./tags/面试题/page/2/index.html"}]);

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
