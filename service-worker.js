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

var precacheConfig = [["2020/04/08/面试题笔记/index.html","10d6d22043544497f8e6814ff7ac56c8"],["2020/06/24/linux防火墙常用命令/index.html","4511180d10f189e34f410433f4913078"],["2020/06/24/redis命令/index.html","9635a6d3466b4c9199fbf278d6ef1e68"],["2020/06/29/博客项目/index.html","96524e82188012bb7637a03f30a51d7c"],["2020/07/01/07_SPRING_DAY01/index.html","37d79e65295c5282074a45f4034fddb9"],["2020/07/01/07_SPRING_DAY02/index.html","e499fdb6013bb186ef5c76b7779549f0"],["2020/07/02/IntellijIDEA快捷使用/index.html","9ef248776af371f02e6df3c376b23cbf"],["2020/07/03/07_SPRING_DAY03/index.html","d0c4b4ba333f13579a6a9d67f779ae7c"],["2020/07/04/08_SPRINGMVC_DAY01/index.html","08bfec76baf655a5aa99bd26f1550dd1"],["2020/07/04/08_SPRINGMVC_DAY02/index.html","8f7d38c3173f9c8ea9b73f91cdd2800a"],["2020/07/04/hello-world/index.html","f6580feabef2fa33d1b0d28d0cc57993"],["2020/07/06/08_SPRINGMVC_DAY03/index.html","67d96110d47089758b5f9268badd7c24"],["2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","205b5c9bd6a122d1e6e33923d4fbcce8"],["2020/07/06/tomcat去掉项目名/index.html","52f8513633a49d7342d96425bae90b2a"],["2020/07/08/09_MYBATIS_DAY01_1748/index.html","79566d89aade2ac732c7437770d54f05"],["2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","ea140f81e7381dba6d58a71d1b1c6ac2"],["2020/07/08/09_MYBATIS_DAY02/index.html","7e38f03cc147e35546ade797f46ecbd3"],["2020/07/10/09_MYBATIS_DAY03/index.html","11161f01c1c091a82b7c8f708b36fc09"],["2020/07/11/使用Artitalk为hexo添加说说功能/index.html","6386cc6b0ff3e8b7aa71f64869f72362"],["2020/07/17/2020-07-17-Hexo问题解决/index.html","af5f2860a3fbcd859761f3936d894757"],["404.html","c259d1c0beb761dcd169095c1ff0888a"],["archives/2020/04/index.html","61f9b87ab8ccb1dd42bdda381a180fc2"],["archives/2020/06/index.html","164e4bcaeaad55dc3fe3c8fc59bce82a"],["archives/2020/07/index.html","6bdfae83fb0c43cdebe3f9b4f56777fe"],["archives/2020/07/page/2/index.html","4d550854fb3cf0b6cbce753687a42805"],["archives/2020/index.html","242ae6206efa4ad534c0d15b72c98ba7"],["archives/2020/page/2/index.html","be909ab03f5885e9863cdfa430e898f1"],["archives/index.html","7eafd50ec16d42e961d25f0bf8e86997"],["archives/page/2/index.html","2d816dfe698289bd9f5c44c59aef8e69"],["artitalk/index.html","7e495e2c3487a71ef4d9060f2dcd3d14"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo/index.html","58111e6911b604d16d40eadfdac51383"],["categories/index.html","6af7c7f027387ba8b94d5dd99b3d0198"],["categories/达内笔记/index.html","ee9769a722ef998b4945399f1da82e4f"],["css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/Artitalk01.png","33729319357f93050672c77c752afa4e"],["img/SpringMVC.png","08d7945eda52c40808202ccca0f400c4"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/shuoshuo.png","0212835277a9938fe117d9ded23509b8"],["index.html","bbc7ca3e31be6ad84a82a7e441d8ed38"],["js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["js/utils.js","f2f712d5d52625b377855945420eea15"],["link/index.html","6b8b2599ccdd15e37b312530c0cedf89"],["messageboard/index.html","62f358b09caaafd2a26a89537e4b69fd"],["music/index.html","054b060afa6ebc213ee416b6100727e6"],["page/2/index.html","00c3bce84dadaba7d61d793bd8a9dec9"],["reprint/index.html","793d6ea14cc046e7e5f2ebe4ce5e29f7"],["reprint/index的副本.html","89b1804c05c81105629ce8c6d787efd0"],["tags/Artitalk/index.html","cf0dc503449b3f2a7325e7566ff79833"],["tags/MyBatis/index.html","328dd3c49109ef422584490a6d0982f8"],["tags/Spring/index.html","295665867d06d7f129a217f18cc265ec"],["tags/SpringMVC/index.html","1f45ba977ea8fe5a93a9a558de79d98b"],["tags/hexo/index.html","781c5be16e2ca0cb2383f0a9cd3d5cb5"],["tags/index-1.html","97f3c80af84474347e08d611028dbd32"],["tags/index.html","0a7114825967fb0c8edf388e8b7cd4d4"],["tags/nginx/index.html","75f191d3d8623c889f902c5209dc762b"],["tags/tomcat/index.html","ecff6f73abb068eb56dc3898d5527692"],["tags/字符编码/index.html","4dd8ba5fa8dfe85226bb072842ba92f5"],["tags/负载均衡/index.html","ea8d3ff000d0fe58fe5be13ae2dd215b"]];
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







