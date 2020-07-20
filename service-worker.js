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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","eab621843e4b158225a924e040ea923b"],["/2020/06/24/linux防火墙常用命令/index.html","a5ddfdba906069bf0e771ca2ff1ead8f"],["/2020/06/24/redis命令/index.html","24f94899a6050d39a3575353a15dd0c7"],["/2020/06/29/博客项目/index.html","5ccc6623d3e071dbfc96b93256e73ce1"],["/2020/07/01/07_SPRING_DAY01/index.html","0ffd02e2afb55c6a36d9aed4a5f9e372"],["/2020/07/01/07_SPRING_DAY02/index.html","c386a91c54e9c6b4f37e8b5e72baafe7"],["/2020/07/02/IntellijIDEA快捷使用/index.html","c9dd59eae1bddbe53a39d072fc95dafa"],["/2020/07/03/07_SPRING_DAY03/index.html","a59d38ac07ffa4a48f5391a1ca7e911d"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","2c40152d32601707486f4567a8b83428"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","0b288e34150291aa3690e9a52a205623"],["/2020/07/04/hello-world/index.html","a701c2e2afe4b127c81270b8c6d6255b"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","ae557dd4edf2d684efcf41efc6ec467d"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","ca05d03f470c66b59549ac1ac5d269e1"],["/2020/07/06/tomcat去掉项目名/index.html","b05d69f569d9d8cc3906d3fcd72d073c"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","bbcabc99c9685dcb4e37fa04cafb8264"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","bed8367c7da73261477a2c843cce5949"],["/2020/07/08/09_MYBATIS_DAY02/index.html","af1cc3c67cb379093b715ff8b3ea95cb"],["/2020/07/10/09_MYBATIS_DAY03/index.html","896ee06a289b9cdd62dc8bf46021db5b"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","ef2a0f59b55ca8007fad9b19ba0d479d"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","43f022d462ae76ea65a8afa3b85de376"],["/404.html","29680d378cc38a6e57cda448a04cc4ba"],["/archives/2020/04/index.html","207b8b387c3a1b47ab1e2d6a43ae55a6"],["/archives/2020/06/index.html","c72938b25fffdca59dd8bf818c5c948c"],["/archives/2020/07/index.html","4e774eea93c950babb36544a3a4cc8e4"],["/archives/2020/07/page/2/index.html","749195d2c323d9c3f52bd23a85ae497f"],["/archives/2020/index.html","e12ffa29dc3860b4ee36db7175234ebc"],["/archives/2020/page/2/index.html","6b73e06465fe25c5349b0e4c9fe43f20"],["/archives/index.html","d570c6617e915cb8ddf46e73e5962a13"],["/archives/page/2/index.html","9b31d5384450fee764bf7b1520db229e"],["/artitalk/index.html","2e063f7efd392fb62d64ad6af1aba216"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","ce7137a08b4ff9131c06ce564b3c7a40"],["/categories/index.html","b7a490d1eb4154612338af0283323a5d"],["/categories/达内笔记/index.html","afb3b34351ba08402a07414a8ebe0eed"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Artitalk01.png","33729319357f93050672c77c752afa4e"],["/img/SpringMVC.png","08d7945eda52c40808202ccca0f400c4"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/shuoshuo.png","0212835277a9938fe117d9ded23509b8"],["/index.html","9b5df687098909dc2ac38a257fefef4c"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","e2c18c1032fc24237b9c0dd7bf82f29d"],["/messageboard/index.html","6408e35a7e86db86ed6968b5fa90dff8"],["/music/index.html","4bf74c3a518f1b67b190355402e01814"],["/page/2/index.html","245089820191d879c537ea29c404f65b"],["/reprint/index.html","569c240baa62ce139be0080fae0d8223"],["/reprint/index的副本.html","bc8f46c47a9ef47a5d84b0f2570d621c"],["/tags/Artitalk/index.html","9fd05a9835b7307b8f8c561dff322749"],["/tags/MyBatis/index.html","38ef6ebc313618735d0e3fd520e04929"],["/tags/Spring/index.html","4ebdf391d3bed4b034d07cc182f04571"],["/tags/SpringMVC/index.html","bd86ae6e3cc03aa6dd8ac74a68ca478e"],["/tags/hexo/index.html","74a8bfda5b0ef67269716362a6aa4474"],["/tags/index-1.html","37a5893fb44b8184df75974974d018a6"],["/tags/index.html","6a91846312f610f4500f26c87b75751f"],["/tags/nginx/index.html","707a16e56a6c4d8fd72056f992215d3c"],["/tags/tomcat/index.html","2d5586a188aaff684940b19c621f7cb8"],["/tags/字符编码/index.html","40abb6f163564c9f3834a6575a0fe29b"],["/tags/负载均衡/index.html","d73ef60af1b2aff4e3e582eecd5592eb"]];
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







