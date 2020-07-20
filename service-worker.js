/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","c4fe838a66ff9e15a4cf37b436c1a833"],["/2020/06/24/linux防火墙常用命令/index.html","0bb294bf0dd7fbd9fea12f646b2e9ea3"],["/2020/06/24/redis命令/index.html","16e5f2c2ac897b1a05c6b85dbda39abf"],["/2020/06/29/博客项目/index.html","e7415843ff4910134f99e405952aa26e"],["/2020/07/01/07_SPRING_DAY01/index.html","bc3aa854042880abc186d53b190c7dff"],["/2020/07/01/07_SPRING_DAY02/index.html","fbc0034ca25ac055b8041c50207d8bc5"],["/2020/07/02/IntellijIDEA快捷使用/index.html","b7e7b9908164d18547c7b3f79e4bc7b9"],["/2020/07/03/07_SPRING_DAY03/index.html","2b4d35c6de29bbae5405ebce8b4aecb2"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","783da699ab30cd669fa5aaf040e5b75f"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","5a4d6695e9630e28d71325b956cf9b5b"],["/2020/07/04/hello-world/index.html","250c17ab1365aae241b76f84f5f6ef2b"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","6e65b3c8d0d2fd92accd07ed678b7e65"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","0be47e29effd6b47dffa11946654248d"],["/2020/07/06/tomcat去掉项目名/index.html","58614d3491aebe8597c0b7d8466db036"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","10740ac624a443842271f48f764eb36f"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","2c1fbfe0fc685bc126f88f2924a911af"],["/2020/07/08/09_MYBATIS_DAY02/index.html","5fae6aa794b9fa05495262f0d3fc4e0b"],["/2020/07/10/09_MYBATIS_DAY03/index.html","45ada1aef18b696b6861c63c4bec6ede"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","447d3bfcd37bf11ebd3cbffc36de5b5b"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","9fffe6358ab0ac161636a7fff37da18f"],["/404.html","8be1321530e52d3c6fb64ccf90aa8c5a"],["/archives/2020/04/index.html","48a8415c0a0ad7c29dd63c3906d59209"],["/archives/2020/06/index.html","7496f840ca2b21ec2a3c8df216a95bac"],["/archives/2020/07/index.html","79ceae20bea2bb9897a1ce3a56ac1206"],["/archives/2020/07/page/2/index.html","9d092a21e6a4e0cec857c5c7da73ed10"],["/archives/2020/index.html","453d4436043676de50f8559bac82afd1"],["/archives/2020/page/2/index.html","356d13056a0ab07fa4ce1435b493687d"],["/archives/index.html","ea18e30771d6661ae508ff9a4c7346b4"],["/archives/page/2/index.html","5c126b01aa85a9a2ccf87231bccd20d4"],["/artitalk/index.html","b4aa0e37c3482024f42ddbe8fd69a418"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","ba262178a4135a5ae399300bc0bbafdb"],["/categories/index.html","a510ee57c3f0832a2af3550a90026bb2"],["/categories/达内笔记/index.html","51c94dfd0386ac9f5e51eea9717464dd"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-512x512.png","40fc4d80598ffcba162dac722a597c88"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","6e80f0d2bd7340144adb9349a80371dc"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","72c0eda19a0a9e00806fc0b7fa0de770"],["/messageboard/index.html","445af8f67e93e490928ed73e399b033e"],["/music/index.html","ef4e80dfd3b85c056ae08d21b63ab82f"],["/page/2/index.html","6eeb70b7acd1b2a73c054fb61eae744d"],["/reprint/index.html","a7b648cf79a6e2d0dcf4bcfe0674e00e"],["/reprint/index的副本.html","11b088d55d8a3a0aed27132a32a32201"],["/tags/Artitalk/index.html","86783b0a4e49186a82cb58cfdab980da"],["/tags/Exception/index.html","827cec67c96b4422942781f34843eb60"],["/tags/MyBatis/index.html","118ebdbf8e32ecc1994173af003a2d3d"],["/tags/Spring/index.html","59aa8d139a792bf01b6731f2052e4e75"],["/tags/SpringMVC/index.html","4e2f0e4d048095ba2715ae548ab07b7d"],["/tags/hexo/index.html","f12f2f990663257901bca781bdea3075"],["/tags/index-1.html","56e388c354b4cd91fb1224ea101cc4fa"],["/tags/index.html","f99f9c40b28583346f43ea38f34893f5"],["/tags/nginx/index.html","980880e24668ab38314e88fb1e2deefc"],["/tags/tomcat/index.html","3ab35310d18a53d269619f695d2c3211"],["/tags/字符编码/index.html","250d09e6577329d691adbe81d16373fe"],["/tags/负载均衡/index.html","7591115f634a0ee8e512f093762ee46d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







