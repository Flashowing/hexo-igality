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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","a749993d1fff9d244e3ac2abacb79932"],["/2020/06/24/linux防火墙常用命令/index.html","fb0a23d5d6ebb0fab9278b929eaae086"],["/2020/06/24/redis命令/index.html","638f7f1497e57a08f0d6d58e76792f3d"],["/2020/06/29/博客项目/index.html","4540c463256ddab325a45abae37ff75e"],["/2020/07/01/07_SPRING_DAY01/index.html","f02b241cf2f65e32676f53d5b82d24b5"],["/2020/07/01/07_SPRING_DAY02/index.html","1d209b842290ff3861371951c5b25531"],["/2020/07/02/IntellijIDEA快捷使用/index.html","2920f6151a1ce8b0c9a8adc3008f33f8"],["/2020/07/03/07_SPRING_DAY03/index.html","530cacaec9044153b6f8525507526cee"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","9b85adc3dea0910935f933f58eec2d10"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","f3d64ff0eb94141c0c2f713db18590ca"],["/2020/07/04/hello-world/index.html","6559317f44546e9a64f032b52ad78f13"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","cec18b35fb531aae115b3d0332c701fa"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","5e9742844d68218bb60ec2cdfca9deed"],["/2020/07/06/tomcat去掉项目名/index.html","cb8f59ba8d86499a4de660fb1371c493"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","56a921b1d19db26c7bf1a6159af8de8e"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","b7b649005102b18c5c5f1e3513263776"],["/2020/07/08/09_MYBATIS_DAY02/index.html","9fdc1f4dc44f977cd2cb567f54052067"],["/2020/07/10/09_MYBATIS_DAY03/index.html","f120a42dfc3e291b9d41a69e712b0a74"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","51ae81b1ea0a7d274341349e443c7303"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","d64355bfe35a8d16df06727ba456644e"],["/404.html","0a8088ad293aeddc61effa243376ecf9"],["/archives/2020/04/index.html","201376da6301938ea0a1a4f3fd05556b"],["/archives/2020/06/index.html","d7b6e89db15899d2972c7ac7aa43a2cc"],["/archives/2020/07/index.html","dee89e446c5806bd8dab9af17dbba831"],["/archives/2020/07/page/2/index.html","1e850c041f154341c257a3183c552667"],["/archives/2020/index.html","f2c07e625850f3fab83a0048635cfdbe"],["/archives/2020/page/2/index.html","55d8a5e94149658924f83e5de98b1ecc"],["/archives/index.html","9cfd075cfd356313b912a27082c92e3d"],["/archives/page/2/index.html","4c078dc7a0fbad6d4804c3539ba7af0e"],["/artitalk/index.html","100851757cd1d2046973cc8f768b2623"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","9bbb336ab8d297b318d812185c1c8137"],["/categories/index.html","50c51fb813d930f789ea353bc18e6f83"],["/categories/达内笔记/index.html","e993d345362276a5c69a39e88487960f"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Artitalk01.png","33729319357f93050672c77c752afa4e"],["/img/SpringMVC.png","08d7945eda52c40808202ccca0f400c4"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/shuoshuo.png","0212835277a9938fe117d9ded23509b8"],["/index.html","b2669ec964981cfdf795d8f12de3fc28"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","c4d4776bbab299c2a9dda5005cdfabfa"],["/messageboard/index.html","36319163b5bf056e3be850825f30ea70"],["/music/index.html","1f421edf3ecdc0b084f905f93f5e61df"],["/page/2/index.html","5403765ac9bdaad2b58df9f154ee82cd"],["/reprint/index.html","4fe339de1c75f007085072377bcfa226"],["/reprint/index的副本.html","0a602be0ab6d1fb88780abb43b5f3833"],["/tags/Artitalk/index.html","b38c3621195b5fbbafcb9e4368a7a5e5"],["/tags/Hexo/index.html","e81c555ea52d71322e9758f4a7b3ec24"],["/tags/MyBatis/index.html","bbab5e9f2abe4da1e07c657b565a3945"],["/tags/Spring/index.html","704c344ab23cc73d12b21a68f5b115bc"],["/tags/SpringMVC/index.html","a82f022cee78b6917d40a44c15a0a9c9"],["/tags/index-1.html","25a68be31134ca032f7e54801c38b732"],["/tags/index.html","64e74c0fd08e2fd580eebc8fe2e13ab5"],["/tags/nginx/index.html","7c8ddddcbe7835e31e9da5d2cbc517df"],["/tags/tomcat/index.html","30a56330fb13fc0cf414bc506f3c6ecd"],["/tags/字符编码/index.html","1fbd1c6fbae5aacf3456ab6c5c082fbb"],["/tags/负载均衡/index.html","f05e6191de8455419f065db1677db85f"]];
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







