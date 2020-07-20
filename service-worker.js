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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","f21e5fa3686b2ca7c7aa4c2193619168"],["/2020/06/24/linux防火墙常用命令/index.html","8dedfe61b610c2ebfc9fe919fd8c0972"],["/2020/06/24/redis命令/index.html","f87ed70c7ba837b8675b51fb290f0552"],["/2020/06/29/博客项目/index.html","f813999b7f99d640ad82e10e6280a1e0"],["/2020/07/01/07_SPRING_DAY01/index.html","d9e943d9be8d38ed00d851bdc1139153"],["/2020/07/01/07_SPRING_DAY02/index.html","d188d5c3bb76d76fbc9809d2c92a2431"],["/2020/07/02/IntellijIDEA快捷使用/index.html","f1bdfca79116ff0a530bebd56c76f7d2"],["/2020/07/03/07_SPRING_DAY03/index.html","a581652a707a7d2da04fa127d0a5c184"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","e6e5e6e7c12df3f6c404c3572bdfaa9d"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","7c5478962a8e61b98f6416e25d865f46"],["/2020/07/04/hello-world/index.html","a092cc23a926bb94b2379ae1b9ae922c"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","970af138d21f262dd44f154b4ea2d9ce"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","ef67ea604561947cfb2b4072e9265119"],["/2020/07/06/tomcat去掉项目名/index.html","0918cb0b7c3bf0d1582998c534fab9fa"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","2d8d1a3ac620cd17d9915f57d3b299c6"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","8ed4687fc5b2d67f6b4ea360ab29f9c3"],["/2020/07/08/09_MYBATIS_DAY02/index.html","c1b01b298e7f7d7f5838a4e095c1f671"],["/2020/07/10/09_MYBATIS_DAY03/index.html","8a7b13b4f58d07a7366626c3f1751998"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","0e681f6e2defee7b1c3e45bae4912f0e"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","f6317f98c3630ac2f563fcafb62b77bf"],["/404.html","d31c3a0b0c0b5dacabde103b5689c11c"],["/archives/2020/04/index.html","ec26fdc5b95d11cdfcdf32f74cec677e"],["/archives/2020/06/index.html","9e027e897d7453b536c110eab04d392d"],["/archives/2020/07/index.html","65c660995b8e6b920a9e242f1876d694"],["/archives/2020/07/page/2/index.html","6979162db1a764661dfd0fc0062e75dc"],["/archives/2020/index.html","eac55f823ee618e4ca40b253d56834ef"],["/archives/2020/page/2/index.html","c9502f49276dd892effda1839258caab"],["/archives/index.html","1bd2c586a956ec932f0a0011efe21bfb"],["/archives/page/2/index.html","6da89283a524165dd86c2fffb1d4b6b1"],["/artitalk/index.html","0db29e3ca601e4a4516e6ad1b587cace"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","7adef3136fc535eb85c549ebfdd32c3f"],["/categories/index.html","8cc7fdd451f27c8a191ec5dab583238d"],["/categories/达内笔记/index.html","fc0b5eaa5235ae76a275d90542c07cb8"],["/css/index.css","fdf8435e613c309d9bcb1e2b4270d02a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b311a5acedb112efa6c8dd64e449a968"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","32aff37799491e38286f98dbe097475f"],["/messageboard/index.html","7b06dc5645ba1cb9e4943c33b12074c7"],["/music/index.html","75cdf156411e9223e1716979dd99298c"],["/page/2/index.html","7cb62c33b972f8320cf45b4c3189339e"],["/reprint/index.html","915dfe301e1ff84d3bfe32c951488173"],["/reprint/index的副本.html","542c7350e135acbfbd9d0ca47370e13d"],["/tags/Artitalk/index.html","bf0763b9dbaaf066d903fd5bbec0a6be"],["/tags/Exception/index.html","83ef52a8605d0865405cfb62ebcd042d"],["/tags/MyBatis/index.html","1373357c193761f9076cdbfe42c6c380"],["/tags/Spring/index.html","9372d8fd30f841597ab273020319983f"],["/tags/SpringMVC/index.html","eee5e709accd6ef44f8a7d6cbda4b2a9"],["/tags/hexo/index.html","c550d224e326a7aa4d9bdc88c1376ff6"],["/tags/index-1.html","9b048ddb4f169954484a0d23547ce493"],["/tags/index.html","92e322301912ad2120834c0ca2734c75"],["/tags/nginx/index.html","cd0d9f9ff58738450cbbaf0aa33747c6"],["/tags/tomcat/index.html","5bec2b61d119314c8b098711e75c7e6a"],["/tags/字符编码/index.html","82d64498df1908252b17beaa5aeb4738"],["/tags/负载均衡/index.html","775bb71b24cdc0263f7347e6d4c53947"]];
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







