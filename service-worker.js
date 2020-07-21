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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","59b5d02dda348dd2ee05af397f097df5"],["/2020/06/24/linux防火墙常用命令/index.html","08b72396e0c9c5c66a4acdac308218eb"],["/2020/06/24/redis命令/index.html","1e8cfaf257b813f282582899d734fab9"],["/2020/06/29/博客项目/index.html","5a5ba0ee9fb65ae57fd1d3b53eaa8c6f"],["/2020/07/01/07_SPRING_DAY01/index.html","dcb7e110c5e25a4f8ff40df6ada1b6ec"],["/2020/07/01/07_SPRING_DAY02/index.html","c814aa04a89e0621e187461f01ca92aa"],["/2020/07/02/IntellijIDEA快捷使用/index.html","7c8b3a680ec34af31a90428deafc9a74"],["/2020/07/03/07_SPRING_DAY03/index.html","04c29c7686a3b53d96307778fe77988b"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","d41f11929564cf835ffff0c20576684a"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","4cf050ef19259256bd654a092662474e"],["/2020/07/04/hello-world/index.html","f2b0589cb8071d39e57d029258d986cd"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","294d86e030e71f12da5db79e33129658"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","db83d93dae66c439e55b888868b2d1dd"],["/2020/07/06/tomcat去掉项目名/index.html","39effca174ff8d58886309e0788e4b0c"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","5f21d757a24ee7faff7e761ca646a20c"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","73501188e57dde1e77abee2ec62423ce"],["/2020/07/08/09_MYBATIS_DAY02/index.html","9664bba2c933153779fbd3e33f5a3c03"],["/2020/07/10/09_MYBATIS_DAY03/index.html","2bff7bb2431b0a7b4da7d43185c7707d"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","8a4459be6273df9572cd58877d598429"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","56b6c98bd75779f0d374dc91b4f46147"],["/2020/07/20/网站建设方案书/index.html","ec58e252b0ebf393ddf2392b3bbece8b"],["/404.html","337f6956d566d95bbc2ad894ddce153b"],["/archives/2020/04/index.html","932fadfabe36ed0d142fb785904a6e69"],["/archives/2020/06/index.html","700dcf8cae1b734400a7d88ed469bd4d"],["/archives/2020/07/index.html","1f87a345e2a3841d69c5156b016cc2be"],["/archives/2020/07/page/2/index.html","f09b16babe380daffcb2372401e623ec"],["/archives/2020/index.html","1ef1a944ab2e3fad73edc600c7875cb3"],["/archives/2020/page/2/index.html","2e8beece984dddcf4264e304fdd41cd6"],["/archives/2020/page/3/index.html","ad215ad7cf5e8f834f4f79e53b323023"],["/archives/index.html","6f03e5308abd1cc461627770da71b3e3"],["/archives/page/2/index.html","3d7fee1fa78821bd2822429d95786d67"],["/archives/page/3/index.html","4be6917713a8a693270940cfa9c29026"],["/artitalk/index.html","4cdf962bd04115b2b71c28d2b62100a1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","1d0159c8bdb8160a54012af1f433ab88"],["/categories/index.html","bbc02557dfec0e54a462841d1d3fd27d"],["/categories/达内笔记/index.html","33593ceecdd0565f67550fcb6e2eb352"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-512x512.png","40fc4d80598ffcba162dac722a597c88"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ed1245a75faff3113da2ed2e1bfe3455"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","5ced24a3320978b11ac84fdfa724eab1"],["/messageboard/index.html","a24a60b4784bcd6aa34f449fbeb8ff22"],["/music/index.html","fda919979b29ef29b5d683f42b25492a"],["/page/2/index.html","960e52c252cb22d4589756dcd7f6ec47"],["/page/3/index.html","dfb7f38f8646569fff41383d3819da58"],["/reprint/index.html","5065e8e8e76c9e9554c133d97a7e9c7d"],["/reprint/index的副本.html","24d99a0ff4033ab6626a83aa8b2da305"],["/tags/Artitalk/index.html","8589e20655038f15e044e9307620e6fc"],["/tags/Exception/index.html","d3a1baa0b83d91f2c59e0e8382faa2a3"],["/tags/MyBatis/index.html","cd6adbb0177985eac5efc6dcfba05eb9"],["/tags/Spring/index.html","9d8e9ce98dea28fcb30a5c12c99c031a"],["/tags/SpringMVC/index.html","36dcbb95e27ff0a907c99ec96896a4cd"],["/tags/hexo/index.html","e2f2aba1c6623c4750b8e45b78354709"],["/tags/index-1.html","d9f0d78a3e802a1d680717596079310a"],["/tags/index.html","e184e189475c9925d40b40c155183524"],["/tags/nginx/index.html","3ea6c62c05d419afe5a6913f15410d5a"],["/tags/tomcat/index.html","b949239879ca5edea1044dcf88d1053d"],["/tags/字符编码/index.html","3c1a868a095867436315a293488737d0"],["/tags/负载均衡/index.html","dfcba85c95c5e8c910e08e480e6bebc2"]];
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







