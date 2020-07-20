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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","8a50beca15282ab719a3f0fefbd211b0"],["/2020/06/24/linux防火墙常用命令/index.html","3f5ea56a90c4f4ff83dad4aa9f894c59"],["/2020/06/24/redis命令/index.html","173f83918ebb6670c16d899a512c20d5"],["/2020/06/29/博客项目/index.html","8e8b0d24c995a600531fdd6c69087691"],["/2020/07/01/07_SPRING_DAY01/index.html","3329aad3c59cc6664cac3f3b30a1a354"],["/2020/07/01/07_SPRING_DAY02/index.html","abca6befc5b85784af251b1b5d7d60ce"],["/2020/07/02/IntellijIDEA快捷使用/index.html","e3e30f65b44cfc9b004371ba192dfe01"],["/2020/07/03/07_SPRING_DAY03/index.html","3dcb91d99e02e5fa6900e46aaf973948"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","912653be38807bbdbb3cfce347ad32ca"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","0d66a28d5d708e07d6445a07ea1de4d4"],["/2020/07/04/hello-world/index.html","1bdb728d47c08625f98b8afdab055e7c"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","91706b51c22361bf7f44b02d2c0ba43e"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","12a62b03705fd8b8ba818077d9b8ee81"],["/2020/07/06/tomcat去掉项目名/index.html","894ea856a402577932f7c799a506eb94"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","1e531d85879ef56f5d59efcf5e62eefd"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","ffded58a87af7f77af016874be8e780f"],["/2020/07/08/09_MYBATIS_DAY02/index.html","6ada7c44870fb234978d98cecfc147f2"],["/2020/07/10/09_MYBATIS_DAY03/index.html","fb119195a7fac9b6348e8d5b5df35b81"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","c623f094de22c675523e0837c90b3643"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","c9cc3d3c1ebc5c0697e409ea9191a122"],["/404.html","c3ec168956c5107ca4b9d3f4c80b8185"],["/archives/2020/04/index.html","a1ea131777d7c0f02b05877279b3161a"],["/archives/2020/06/index.html","e4a2d25ef6853f19a6c080b94fa1aae6"],["/archives/2020/07/index.html","0828bec3bba1c83333c3395a53ccbb84"],["/archives/2020/07/page/2/index.html","a52498dfce9377540e729a253c298e2d"],["/archives/2020/index.html","d67c600e00dcc7eff0ac4313bf5f31cd"],["/archives/2020/page/2/index.html","6f317f07458f0439aba8213633017902"],["/archives/index.html","a26201be6fc7a3870e954d8d81872b9c"],["/archives/page/2/index.html","701f1b8387761cb8b99029d4ac100dea"],["/artitalk/index.html","91bbe9e4c5c62c17844fd2cebbd5654a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","3344e5c41dbbc2409a7f63bd262072d6"],["/categories/index.html","36659234ee74976f025157f8084d974c"],["/categories/达内笔记/index.html","63064b418bc2b51771ae25cb30b2dad4"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Artitalk01.png","33729319357f93050672c77c752afa4e"],["/img/SpringMVC.png","08d7945eda52c40808202ccca0f400c4"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/shuoshuo.png","0212835277a9938fe117d9ded23509b8"],["/index.html","1a918a9a6fd50ad4512eef1b40694947"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","927c2b02ce57de1fe6906d5137b2384b"],["/messageboard/index.html","08ef9c07e664b76e65f17350e9392f28"],["/music/index.html","a1e82b7418bf1930a669a74c2624bd52"],["/page/2/index.html","70ccea82e3f55a3e8f3073683d3fc6f6"],["/reprint/index.html","2a2d92f6925d41f42bb86177b632c02f"],["/reprint/index的副本.html","6025a8d4e05b3a2031b56663178ec046"],["/tags/Artitalk/index.html","ea5a2386ec7e831582c02dcdb1fc7c0f"],["/tags/MyBatis/index.html","a996bfb42c3ca9da181b89064255d5bd"],["/tags/Spring/index.html","92bb7ebf4c1158d79519f72c8efc4615"],["/tags/SpringMVC/index.html","e2e1404a6d839cd9221f91eb321f2c63"],["/tags/hexo/index.html","f979b83c85d4b17a8e3e5c2892783cae"],["/tags/index-1.html","7896d2b5dd7dca47d93ca0eb61a644b8"],["/tags/index.html","43cf8e6fc692dbbb3db241e95e68a8f6"],["/tags/nginx/index.html","20dff5ce9db324e04ca5d92de463a22a"],["/tags/tomcat/index.html","d26399a4ce7edf5ba1c3b2a2882c21a4"],["/tags/字符编码/index.html","5f0387bfaecd35aff40cca594f028472"],["/tags/负载均衡/index.html","7318bf539fefa479f44378526b7ed2e1"]];
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







