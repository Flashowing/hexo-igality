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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","87ecd37f0d5b815dc767fffc5d8721b0"],["/2020/06/24/linux防火墙常用命令/index.html","a0355429239166a7211fcecc1ae6a7f4"],["/2020/06/24/redis命令/index.html","3dc04ff4db5a684992764ec11eeb7fdf"],["/2020/06/29/博客项目/index.html","b2c8f070ce04d7c24373866c56dc6fba"],["/2020/07/01/07_SPRING_DAY01/index.html","c0d02525155dcec021f382aae4f9e7e5"],["/2020/07/01/07_SPRING_DAY02/index.html","752fc0babcc38fcd36b57d01ae9798be"],["/2020/07/02/IntellijIDEA快捷使用/index.html","c824dee76dabba34f55f65487704b107"],["/2020/07/03/07_SPRING_DAY03/index.html","24fef3cd8239c24e4b60a62edbb89084"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","7f6294f9c166e1358491828dfbccdef2"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","419c0103c6d01874cc41ee4f48306860"],["/2020/07/04/hello-world/index.html","47c202a621d669bf74cfabcacec1c6b8"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","1e951e1d847720570c037b7cf7ece5c0"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","4b12f3e49630f5805d53004d1d6ec356"],["/2020/07/06/tomcat去掉项目名/index.html","2ccb026f28b775e6e22039011175074e"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","15f38d0f409fe35a3e1678183e1a2d81"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","b1d87ed4cbb707a247373a0712aae50f"],["/2020/07/08/09_MYBATIS_DAY02/index.html","921d01e3e285ad7816e2d6a9ff8d788a"],["/2020/07/10/09_MYBATIS_DAY03/index.html","c09fb892becfdb4154c7588a6d4b84f3"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","20f265f6a1197269c4215c853d188d50"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","4aa6847cb471f2a357408b3c8b24bb92"],["/2020/07/20/网站建设方案书/index.html","a2ee4d2e4788897a062f249fe355b10f"],["/404.html","92095177e23847d47735a871678e3668"],["/archives/2020/04/index.html","4b614d18bd12d197162c00b53dcaeaa7"],["/archives/2020/06/index.html","a54e5d36193ab9cf48f3fa618a509b7c"],["/archives/2020/07/index.html","dd56683bb41849a39a039577a432a0fa"],["/archives/2020/07/page/2/index.html","a17c22bda07c02c39ee74fc0212d3aad"],["/archives/2020/index.html","709e48b60fa4682ffece252fdf4ce104"],["/archives/2020/page/2/index.html","74a9e14863b7bb8847ae21742570c579"],["/archives/2020/page/3/index.html","7382c089bf1f42ede5b90b3fd0667b56"],["/archives/index.html","9724b67d9cae0a676942e80b99a8e093"],["/archives/page/2/index.html","c3aeb5692abab838a2f16e42378f11c3"],["/archives/page/3/index.html","04825781b11c46ef03ce2e549c59866d"],["/artitalk/index.html","3562a9be728030540fb26be2466a51d9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","beadffa5fa3f862581473323dd3e7b63"],["/categories/index.html","fa1266f700b1545bc4a8475c6a31d3e1"],["/categories/达内笔记/index.html","ca5c0835a196995fd39d2f3fc806e779"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-512x512.png","40fc4d80598ffcba162dac722a597c88"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d6d19f0aeeb165925d822408448b4be1"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","9f26fa6fc776b698814ac4adf7507258"],["/messageboard/index.html","0c129f3acd025bc7797c9edebaafb5f1"],["/music/index.html","d4083b2a7671c0e75306d349b83b1d65"],["/page/2/index.html","784c5cd870fd13832e07f5c63c7bfff4"],["/page/3/index.html","c8232e112577fff9f9985fb9b64db86f"],["/reprint/index.html","9fd62043135196f820329e9cc5e70986"],["/reprint/index的副本.html","5157188cbfcd377b11032ab2f029d27e"],["/tags/Artitalk/index.html","1394d8cccdba2f31872750ab04cc6f6a"],["/tags/Exception/index.html","a771ab408324c03cb69040154b5d0868"],["/tags/MyBatis/index.html","806bc30a6e64f1cfe4754e45a780fb66"],["/tags/Spring/index.html","690599bca8655126ceebefd27d7ee98f"],["/tags/SpringMVC/index.html","18deb69843105e10f1706bb31438c794"],["/tags/hexo/index.html","3d381b46ffe5e277f5aa5ce51f0a268e"],["/tags/index-1.html","2243853ccf52d09a6470dca2c309c42b"],["/tags/index.html","d01e7aca318590d4c57ef188d6043a3f"],["/tags/nginx/index.html","d620bc42a340167eaedf4c77f09296e7"],["/tags/tomcat/index.html","7bcb50b858c4c70b5536aa46a1f1f875"],["/tags/字符编码/index.html","2172f49bdc62008223afb532ec3071c0"],["/tags/负载均衡/index.html","ab147faf1d014f151b67a871d713702a"]];
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







