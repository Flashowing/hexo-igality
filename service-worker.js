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

var precacheConfig = [["/2020/03/30/网站建设方案书/index.html","4cd0694609736ce85cd04b4c3d17f61e"],["/2020/04/08/面试题笔记/index.html","70bb67f56c812d6509127ad3d912006e"],["/2020/06/24/linux防火墙常用命令/index.html","034029f33b852a466f1102acf852e205"],["/2020/06/24/redis命令/index.html","83bb97286716f4fdc2ec990e4c00ade1"],["/2020/06/29/博客项目/index.html","423e823f561e61905a5b0336833f603e"],["/2020/07/01/07_SPRING_DAY01/index.html","c18d4dca149d226fc9f4dec21d08f994"],["/2020/07/01/07_SPRING_DAY02/index.html","95467b9dd1aadbe0024b0cd0ffc9d0a4"],["/2020/07/02/IntellijIDEA快捷使用/index.html","d86e3907bb4054ee918551e57cc38624"],["/2020/07/03/07_SPRING_DAY03/index.html","b3bb08d953dcccd027e1556921436eb1"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","3a053a8e5d67f9675a0caa4559436abe"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","4dc127b08082ef962ebf51334e8f1e2d"],["/2020/07/04/hello-world/index.html","49277892b17ffdaf7d33da2386577b64"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","2c0f2a9eef04d099917b52ce23a27229"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","dc7ec9766c0cee046e47e7bb76d481c4"],["/2020/07/06/tomcat去掉项目名/index.html","991aad24efade3772ca0ae38aed39797"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","9dd50e78b67a41021077b7510fe01acc"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","5c86e33ba10e2cc7f7280db4fdc72ec8"],["/2020/07/08/09_MYBATIS_DAY02/index.html","ea9ebcff55ba2f998407bb9998305f79"],["/2020/07/10/09_MYBATIS_DAY03/index.html","5b365852500f7c25529d2de5414dcaa9"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","296cdad7ab03c7a81f9e02c1f7389ab2"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","e5f9ea24bd9a3eebf44c346a478fbfe9"],["/404.html","1e193185a81d5590dceaca4e45dc16f0"],["/archives/2020/03/index.html","9da23af4e658cbca88eb735ff95c1f05"],["/archives/2020/04/index.html","14896ea0afcd461038ab79ea8d73a73e"],["/archives/2020/06/index.html","bed76d7c90f9763e1ed8183575859478"],["/archives/2020/07/index.html","939d25530b40d552fab93ca403864cfc"],["/archives/2020/07/page/2/index.html","4f177d329879da24b74757d5757c9a9f"],["/archives/2020/index.html","6c370c09407e0bcaaaa5c4ddf61c93b1"],["/archives/2020/page/2/index.html","0e6fc2f7b17f7c0e6fbcc8843b1f17ca"],["/archives/2020/page/3/index.html","41d47496229e3d82a37ca03161814096"],["/archives/index.html","9aedfe3044acfb0dd33962163f63b8f2"],["/archives/page/2/index.html","ec395a1f1f0bce5ca3bc797b8b18491e"],["/archives/page/3/index.html","ae150a5ba1d203c65f5c703d853c605d"],["/artitalk/index.html","ad90be2a1f80bbf54a705d69a3b12ef6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","e9844b4de3d343e8aa4cf4c8bfb1d441"],["/categories/index.html","9d04358f9e8c1c176fc110ff0a1c7eb9"],["/categories/达内笔记/index.html","c88965643bf23b98c0505b6b2f3221e1"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-512x512.png","40fc4d80598ffcba162dac722a597c88"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9faf7017c9fd184bb17a8fc2c344f41c"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","67965873d3f934418fac85b47eafe383"],["/messageboard/index.html","f0a55e7cd2c1c4aed4c7f3a3fdbdd6e7"],["/music/index.html","ca0f88fd6fa639370d87c79364e5aca1"],["/page/2/index.html","4c634fb365c1938d600df37bd0dce565"],["/page/3/index.html","cad8a0587929c72c0d1702bd1fa4b704"],["/reprint/index.html","dea1996265577056bc83ae888cc37f2c"],["/reprint/index的副本.html","106ca5be6c7385d01565b46b7874e32b"],["/tags/Artitalk/index.html","1992380d3dee4395f7152f27b90c701f"],["/tags/Exception/index.html","041c3da348db560f2652ad22b574badf"],["/tags/MyBatis/index.html","19aa7a209421e6cef1da5e21a6bc758a"],["/tags/Spring/index.html","3254eaaecd24dfef7db9d12178f0a973"],["/tags/SpringMVC/index.html","29d39b6b124701748dca735f772be3e5"],["/tags/hexo/index.html","e491765ef2c2a873200c844c3f51d9e2"],["/tags/index-1.html","4f10f730f6c72eb8c3d48eb5b6dd8443"],["/tags/index.html","99307ffd963e8c27f222360c738631cc"],["/tags/nginx/index.html","a044ba6a79c24b66d644548fd5d8b897"],["/tags/tomcat/index.html","3c409e985700785a758ec7d1a4f471f7"],["/tags/字符编码/index.html","399fc1fc6f0a36d367af416b34d08f1c"],["/tags/负载均衡/index.html","30bb953f35a0cba0b06902f8e6ac4a7f"]];
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







