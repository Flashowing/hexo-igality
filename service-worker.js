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

var precacheConfig = [["2020/04/08/面试题笔记/index.html","093afe9290c52e190487d6179ab5280a"],["2020/06/24/linux防火墙常用命令/index.html","5ce92e9fbc6542a2485678214b8bdd6d"],["2020/06/24/redis命令/index.html","b23aecc82037d9832b72af11843737ed"],["2020/06/29/博客项目/index.html","f6fcce67f75fd9f4dfd895a6d38da724"],["2020/07/01/07_SPRING_DAY01/index.html","8e6a0bb8dfd0cad3c5107bc0d749603c"],["2020/07/01/07_SPRING_DAY02/index.html","697d2f827b81f08266f1af71740085da"],["2020/07/02/IntellijIDEA快捷使用/index.html","56f633919989112d8a6b418bac4851e6"],["2020/07/03/07_SPRING_DAY03/index.html","4e7651f9face3af7cc26e94a53b36b5e"],["2020/07/04/08_SPRINGMVC_DAY01/index.html","e06594da5ac9588f70be8cc3c8a84c99"],["2020/07/04/08_SPRINGMVC_DAY02/index.html","f7651123feb86a393b038b6cffd79ede"],["2020/07/04/hello-world/index.html","96f6c778390185db178f21ba8daf0079"],["2020/07/06/08_SPRINGMVC_DAY03/index.html","a967ad4a0ca157fcb9b110ca11ff40bb"],["2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","9966a2c984c12b8fefd8efd7773da459"],["2020/07/06/tomcat去掉项目名/index.html","7130167ad393a37d0460c430076287d5"],["2020/07/08/09_MYBATIS_DAY01_1748/index.html","03471a264ad1ab48a9176f72c76276a3"],["2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","0c594ccc2b3aa0a7fd046fb41938a706"],["2020/07/08/09_MYBATIS_DAY02/index.html","0d82caf88bfc4539c31a978a510472fb"],["2020/07/10/09_MYBATIS_DAY03/index.html","2b2fac9c2f5418ef3e31360cb3fffc28"],["2020/07/11/使用Artitalk为hexo添加说说功能/index.html","935040de0e63bbed9f975f4e17ca1040"],["2020/07/17/2020-07-17-Hexo问题解决/index.html","748333ea15df09199137512d5e33be7c"],["404.html","ef933c51462c43ae2beff2d90ebb6b10"],["archives/2020/04/index.html","94a74dec784a1624af538e9fe2137291"],["archives/2020/06/index.html","f9818e6114958bcc118a9d16d3b604a0"],["archives/2020/07/index.html","03619f772d49f51be8b6621894ac51c1"],["archives/2020/07/page/2/index.html","cbfa3078057dbb36b93a3a144b8460f5"],["archives/2020/index.html","31b591c6ac30ec2f27b87cfd76745519"],["archives/2020/page/2/index.html","1a5145134de329c85b89ef6979ac775e"],["archives/index.html","c80d1b1f3591d27aad2cc6dc8306da6e"],["archives/page/2/index.html","a18642d4667488d3afc51d8af6809cba"],["artitalk/index.html","1a9cdb33e860980f2f925c73f23278f2"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo/index.html","bc58e6781e6adfba7d404f525e743811"],["categories/index.html","d43237f14e8384ddedc5d119377cd719"],["categories/达内笔记/index.html","2fa3c84c9756d09fdf768b2301f0638b"],["css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Artitalk01.png","33729319357f93050672c77c752afa4e"],["img/SpringMVC.png","08d7945eda52c40808202ccca0f400c4"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/shuoshuo.png","0212835277a9938fe117d9ded23509b8"],["index.html","70f4ab2ff3916e83769f1031f62cd5ba"],["js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["js/utils.js","f2f712d5d52625b377855945420eea15"],["link/index.html","dfd67cb626431196d5c20044b0db3677"],["messageboard/index.html","1ced95a6f173d6ad686fe74ac288c327"],["music/index.html","51de2e1ced156cd1b248d1b2196a0ed8"],["page/2/index.html","b7208221065b553b5fac8baec7cf7ac6"],["reprint/index.html","2db8a0a0e4771a4e2f97eacd34d4f770"],["reprint/index的副本.html","90e73d34eceb58c0c14e37c0f09e0bd1"],["tags/Artitalk/index.html","a830ce4c5d387a9cbff3e9ac68517e74"],["tags/MyBatis/index.html","0a5eec5b0feb8aedc6430e18cf834da1"],["tags/Spring/index.html","67a142a2e51a2c4f209353706031ab5c"],["tags/SpringMVC/index.html","07ec00a0f12104bdb4ff203bdfd050e9"],["tags/hexo/index.html","4eb7ed3280b797b91899f17a396191b8"],["tags/index-1.html","4b2e6da7558fb181f3293fcfd5061c97"],["tags/index.html","4ce4aac3830f7d19a467251dc3c5aab1"],["tags/nginx/index.html","78b49d7370acc278c6f15003e9b0bce6"],["tags/tomcat/index.html","041f637b295855bdcb0f98e2f433ced7"],["tags/字符编码/index.html","62cc125070ab02d436abd7c9eb7429b0"],["tags/负载均衡/index.html","52df3cbff653c6bda4e660c2d59fee6a"]];
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







