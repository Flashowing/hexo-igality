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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","cc6c487897aa584b78b089f3657dafcf"],["/2020/06/24/linux防火墙常用命令/index.html","d57e29a803d18ec5d29b9e215557b651"],["/2020/06/24/redis命令/index.html","04cc4fe53067d7dc165095b8da572b96"],["/2020/06/29/博客项目/index.html","a0177122126fa904e8d5fec0a0d3fac9"],["/2020/07/01/07_SPRING_DAY01/index.html","42bbeafe2ff555893b3bf53a29796179"],["/2020/07/01/07_SPRING_DAY02/index.html","778ceec43d710d4a0cf6ac5ca6025075"],["/2020/07/02/IntellijIDEA快捷使用/index.html","e44b2554d8e37e6ff9d5ef7e8f36e3b6"],["/2020/07/03/07_SPRING_DAY03/index.html","6a6400a75b974c2b51680f9e9c7635d3"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","be1925a7b7d9242e67c1909e2591c926"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","ba0889ddb092bae4197afd8a3dce7b03"],["/2020/07/04/hello-world/index.html","a7ae7ae09ec3086346fc30297f8eab03"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","76aa043beecbcc90196a434be30480db"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","f929cb21efcc9279a94b1920e50a54d1"],["/2020/07/06/tomcat去掉项目名/index.html","c6043a781528dc74c68728a8f3e62301"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","3a0e2b534259689b97f03cafccdc6276"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","1632738b4d6472c422c2b88a8c9066dc"],["/2020/07/08/09_MYBATIS_DAY02/index.html","f0bb74824b75afec5b85221cd44a0323"],["/2020/07/10/09_MYBATIS_DAY03/index.html","581bc473582ea5a0a2043210ee7fe3bd"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","83f6a674f278433d72c02092e408f63b"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","a27f0fcbb9e09075e54c79dbb070f0db"],["/404.html","8232e35d124923cf4b31828c8b0f3776"],["/archives/2020/04/index.html","e57312714c2b89cd0730fd3e0672fe05"],["/archives/2020/06/index.html","52b52defee8737a1af7c2952bd351aaa"],["/archives/2020/07/index.html","3158691814e6af5f3fa4e1a1541caf97"],["/archives/2020/07/page/2/index.html","eb4ee5d1bf9d007a5580db497e33a762"],["/archives/2020/index.html","f23034b9c0828ee9dab91131aa2fde04"],["/archives/2020/page/2/index.html","53601f96acf0709eeb97fd42770bc0d8"],["/archives/index.html","582aefe088f80d524b1422b45d6f8639"],["/archives/page/2/index.html","97b5de5768232efac3a4986aa208be6c"],["/artitalk/index.html","35ed449571acddb0c4cbd7d8da0953e6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","031f35276bfa299141a5d32c87929729"],["/categories/index.html","0e1aa1cc29ab19906d17658c2a136d19"],["/categories/达内笔记/index.html","be2965faf5749d1b8f1759aadda95e8b"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Artitalk01.png","33729319357f93050672c77c752afa4e"],["/img/SpringMVC.png","08d7945eda52c40808202ccca0f400c4"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/shuoshuo.png","0212835277a9938fe117d9ded23509b8"],["/index.html","079a44884fd299121c47eaa093a684b3"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","af1a5327be8ea5d438130daa221168a0"],["/messageboard/index.html","a75810cba5d02c4ac3fb587f48f06979"],["/music/index.html","cf134eacc9060e150691c4322e65d58e"],["/page/2/index.html","49093cd571cc1f8d782eada2dc0e8dbd"],["/reprint/index.html","d98a7d34cc66fea3d4e778c58f37c0cc"],["/reprint/index的副本.html","40682c59b1c126c58120d0b34e6ba55f"],["/tags/Artitalk/index.html","600351ff9caa4fc22c248c6eb6e5ac67"],["/tags/MyBatis/index.html","00ef4ea10d7700bd167d6da381f72d79"],["/tags/Spring/index.html","47fddcfe52826c0eecf033bc4e0240a5"],["/tags/SpringMVC/index.html","978670d2efa7c5fb6dd51dace7a7788e"],["/tags/hexo/index.html","2e92480df76a76edea233beb80743fdb"],["/tags/index-1.html","b415b57dd999d32fbf2ff225ca7172d7"],["/tags/index.html","e5b7e8e01a647a63a7e8de46238c0df6"],["/tags/nginx/index.html","b654d74ef4201175cee3677989601985"],["/tags/tomcat/index.html","a77fee02db0552f2fe5cb559fc0596b1"],["/tags/字符编码/index.html","892f4dbea7f76f9cd2b3ceff85467407"],["/tags/负载均衡/index.html","31ea5591717b2364252fa513a0d71c9d"]];
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







