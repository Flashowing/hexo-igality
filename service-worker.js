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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","4687908efdcb91178badc6f55f11df28"],["/2020/06/24/linux防火墙常用命令/index.html","0d351d59428e4ce8f7d368d42972351b"],["/2020/06/24/redis命令/index.html","1330e17cf8ef4444ab810adb9e796b74"],["/2020/06/29/博客项目/index.html","87e353cd04629992b61ea1345977b3d1"],["/2020/07/01/07_SPRING_DAY01/index.html","5696385c09ff33f7244c56c533b417f3"],["/2020/07/01/07_SPRING_DAY02/index.html","34bc50e42133df1fe2b9b64f2e518d62"],["/2020/07/02/IntellijIDEA快捷使用/index.html","aa6d3afc21f5de6cec51296b830e259d"],["/2020/07/03/07_SPRING_DAY03/index.html","e9800dc3876faf410e94f3a9596fc39a"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","3848e05eb782ab4c9b98f15adb226587"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","7435404c68f0e0266ca7cb5e774862bf"],["/2020/07/04/hello-world/index.html","f4a9196137aab7d3d75c9f461bd7ea6d"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","844228b2298f9b7dca491b0f735f0fcf"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","c72538c5d36c27cbb5b3797cd1d20342"],["/2020/07/06/tomcat去掉项目名/index.html","62d853714f6d43353fb67a37205d1ff2"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","5a1fa0051c5043b82df372949a40f2a4"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","57b9aba1b172e996617d7658c19ee786"],["/2020/07/08/09_MYBATIS_DAY02/index.html","431aa6bd89165b7f39b525d52c748563"],["/2020/07/10/09_MYBATIS_DAY03/index.html","25440a0cae5bebe126111dda154606f0"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","3690bb1fcfc886b5d7835916672ccf94"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","96be5ea9cc1a0cd9f1dd36570ffad1c4"],["/2020/07/20/网站建设方案书/index.html","996bc694110e7504c71853340420b3f2"],["/404.html","fc5f3660de72453dff3f206157846fa8"],["/archives/2020/04/index.html","7df3a075845b83722c7b95df41a9c336"],["/archives/2020/06/index.html","59be063c2ba42e56b122363be284bd79"],["/archives/2020/07/index.html","a671025158fdeda572dac899f7fb67c4"],["/archives/2020/07/page/2/index.html","efe0a3004e17c6eaa4fe2c3343695f4e"],["/archives/2020/index.html","26a874ea37542f1cc832daf48868dcb8"],["/archives/2020/page/2/index.html","5342dd094150695b0e76c4d79ca83957"],["/archives/2020/page/3/index.html","6c8aba1dee2fddde03f11c42b5371bb7"],["/archives/index.html","5afe682bd30e9404bed6851e3217c84f"],["/archives/page/2/index.html","c2debf507cc42f38466f0d5bec4daa92"],["/archives/page/3/index.html","449e69804f71edf38ca9f329b8fe7b23"],["/artitalk/index.html","7d41e97f2078fe49cd27be810a35753f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","43c16aeeed7cdee635dfe943e7479d64"],["/categories/index.html","750e8936f97a4143ca0da167f019ac72"],["/categories/达内笔记/index.html","abe8501d44ddfdfa12792f10590d21a3"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-192x192.png","baf810c2574e7bd54b4a1ff89a19ae61"],["/images/icons/android-chrome-512x512.png","67d7b3006e50dcd102fb46f37a6902a2"],["/images/icons/apple-touch-icon.png","9aad7082cca5fd98436be933719ee455"],["/images/icons/favicon-16x16.png","d2ccd48433abbdec366bda058b1e91c2"],["/images/icons/favicon-32x32.png","c607d0d214c20fb91867ada4ae7de60b"],["/images/icons/icon-128x128.png","7f00dfade0a919afd18b63da63829f1d"],["/images/icons/icon-144x144.png","7545696f9bc85a308826810e3906f116"],["/images/icons/icon-152x152.png","e5b60af289d373da1e4700cb44417ab5"],["/images/icons/icon-192x192.png","b044dbed6fb8c26cc766da96bcced6af"],["/images/icons/icon-384x384.png","4462150894b7295af5b5498045601d77"],["/images/icons/icon-512x512.png","93298d8fd0b18922105c2ff61b730ebd"],["/images/icons/icon-72x72.png","3286a669288803ca56aeafd48376b58d"],["/images/icons/icon-96x96.png","49af782be4e240bf635bef18848ef030"],["/images/icons/mstile-150x150.png","2fa9f2e168112e6e0a8d353f266865a9"],["/images/icons/mstile-310x150.png","89673fed83899c1fd9cff0c84aca0364"],["/images/icons/mstile-310x310.png","9a7470fe8e89723f771a232005444140"],["/images/icons/safari-pinned-tab.svg","9f2a0336a4719eefd859e7e1b329f58c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3f791bfe540feeab91ae1e0579cc10c9"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","9f26fa6fc776b698814ac4adf7507258"],["/messageboard/index.html","09f2b9bde4c6c4f5741c95319437f61e"],["/music/index.html","a3eb6ed4390f0f6816e6a87751f3ea41"],["/page/2/index.html","30a36b35b3fe21a9d6acb1e23921545e"],["/page/3/index.html","8a2f2f4a2d6b0ca434a1148a2d3abfeb"],["/reprint/index.html","9fd62043135196f820329e9cc5e70986"],["/reprint/index的副本.html","5157188cbfcd377b11032ab2f029d27e"],["/tags/Artitalk/index.html","b99fc43566a302c2bb55ca58ede89900"],["/tags/Exception/index.html","997fc204003cf49a1f758744c2c631e6"],["/tags/MyBatis/index.html","e98ef3431bf4d1f9a8c64958ff9f1ca3"],["/tags/Spring/index.html","e12467df3d40428a86235f9351e8e0a6"],["/tags/SpringMVC/index.html","fcacb49da3c179805e1df8f525bf9f6c"],["/tags/hexo/index.html","eff1a5c20422ca0ff7bed12234082436"],["/tags/index-1.html","2243853ccf52d09a6470dca2c309c42b"],["/tags/index.html","06f23519e3cafae8af0fb0f8d706c58d"],["/tags/nginx/index.html","ae11a94490b652e977c06b53466e1bce"],["/tags/tomcat/index.html","6e626f6542026a7b06a92d4691750ac3"],["/tags/字符编码/index.html","9f64ea9e00bce2ba8ca6032dd99d7012"],["/tags/负载均衡/index.html","b05c3e4a485d88c515201e074f5d5b28"]];
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







