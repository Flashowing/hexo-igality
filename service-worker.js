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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","bab0018c3ed18b363f07f18170fd81be"],["/2020/06/24/linux防火墙常用命令/index.html","58a6f15b13312b6bb9edcd1277192f18"],["/2020/06/24/redis命令/index.html","bd7f069c843477931762093b680dacd2"],["/2020/06/29/博客项目/index.html","4d829fb83c84b65d7537d8f6039987c2"],["/2020/07/01/07_SPRING_DAY01/index.html","d775ec99eea96f70526e85e158ffd520"],["/2020/07/01/07_SPRING_DAY02/index.html","22e88181273e5957a2654de3b0a28165"],["/2020/07/02/IntellijIDEA快捷使用/index.html","a7bdd006532a9084033c63c1f4711ff8"],["/2020/07/03/07_SPRING_DAY03/index.html","2d8c462ff6c809d78d0dd3891504281a"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","7f6294f9c166e1358491828dfbccdef2"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","419c0103c6d01874cc41ee4f48306860"],["/2020/07/04/hello-world/index.html","2275c7b34f663629ccc820bb18846ec2"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","3a394f2ee161eaf7b8ade32c1266e65d"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","c72538c5d36c27cbb5b3797cd1d20342"],["/2020/07/06/tomcat去掉项目名/index.html","8eaf33ec2aaf736a61c7cdbd6e26a088"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","9a664dc06ed6d8eb8638bc98111a29e3"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","fe5644c5c4fe0c718e63d5d6e54babf5"],["/2020/07/08/09_MYBATIS_DAY02/index.html","ad8263b1bc37415d23401af1b457a16a"],["/2020/07/10/09_MYBATIS_DAY03/index.html","29614ceaee8168efa69966c30f29e977"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","f52e9c9a8160d5dd64938cd6e929c212"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","4aa6847cb471f2a357408b3c8b24bb92"],["/2020/07/20/网站建设方案书/index.html","a2ee4d2e4788897a062f249fe355b10f"],["/404.html","c14e95559367a1d23be47ae0b0dfe03d"],["/archives/2020/04/index.html","2bc4d01d9cc34d215ce145a47c31bc76"],["/archives/2020/06/index.html","b9b8ba16dd55bb0030f6ec680a551394"],["/archives/2020/07/index.html","05d6c3460ddb11bc49043c59dfae976a"],["/archives/2020/07/page/2/index.html","9c21f752f5e0eeaf46a7d0b4db651773"],["/archives/2020/index.html","df26de2208dc79e9e1ed381afa66c940"],["/archives/2020/page/2/index.html","017af7c1dbb7b85283d6408b2856fe02"],["/archives/2020/page/3/index.html","7f722cd1f3a3ff27e9589cd5756ab119"],["/archives/index.html","f4d0337a7364ff398214b3ea0da1dac3"],["/archives/page/2/index.html","f2b1bf6fa9aaaf9d2a58b415345ddf66"],["/archives/page/3/index.html","a4815cbc63089e68737f3e585d9a9425"],["/artitalk/index.html","7d41e97f2078fe49cd27be810a35753f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","04cfe33b04297b0ca2b40f3ac7982fbe"],["/categories/index.html","fa1266f700b1545bc4a8475c6a31d3e1"],["/categories/达内笔记/index.html","edbb05742f831c69c83491144e6aeb34"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-192x192.png","baf810c2574e7bd54b4a1ff89a19ae61"],["/images/icons/android-chrome-512x512.png","67d7b3006e50dcd102fb46f37a6902a2"],["/images/icons/apple-touch-icon.png","9aad7082cca5fd98436be933719ee455"],["/images/icons/favicon-16x16.png","d2ccd48433abbdec366bda058b1e91c2"],["/images/icons/favicon-32x32.png","c607d0d214c20fb91867ada4ae7de60b"],["/images/icons/icon-128x128.png","7f00dfade0a919afd18b63da63829f1d"],["/images/icons/icon-144x144.png","7545696f9bc85a308826810e3906f116"],["/images/icons/icon-152x152.png","e5b60af289d373da1e4700cb44417ab5"],["/images/icons/icon-192x192.png","b044dbed6fb8c26cc766da96bcced6af"],["/images/icons/icon-384x384.png","4462150894b7295af5b5498045601d77"],["/images/icons/icon-512x512.png","93298d8fd0b18922105c2ff61b730ebd"],["/images/icons/icon-72x72.png","3286a669288803ca56aeafd48376b58d"],["/images/icons/icon-96x96.png","49af782be4e240bf635bef18848ef030"],["/images/icons/mstile-150x150.png","2fa9f2e168112e6e0a8d353f266865a9"],["/images/icons/mstile-310x150.png","89673fed83899c1fd9cff0c84aca0364"],["/images/icons/mstile-310x310.png","9a7470fe8e89723f771a232005444140"],["/images/icons/safari-pinned-tab.svg","9f2a0336a4719eefd859e7e1b329f58c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","038f9681e4473731ead8b391b8c4c199"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","4bda1118bb5d3eaed4654020e7ec4208"],["/messageboard/index.html","0c129f3acd025bc7797c9edebaafb5f1"],["/music/index.html","14dfc89c438cc61d72cf1ac68e7b47eb"],["/page/2/index.html","94271bc4f0f6e9a737bbab8d167c0830"],["/page/3/index.html","7aea0d2a8516cf99b6ff2409ed729de3"],["/reprint/index.html","14c75f6c5ad8809510b7fde984c5c305"],["/reprint/index的副本.html","629fcbc53a1b47f9f55bdbc8650de9bb"],["/tags/Artitalk/index.html","7a032b2077295e4a903a9ad02659e48f"],["/tags/Exception/index.html","23c49a0e7351363f9f2b02da9e0c07d1"],["/tags/Hexo/index.html","f790e74d7322b18408dcb85f80dc9f26"],["/tags/MyBatis/index.html","5256cab9911ccb61372ec1f440cd3d03"],["/tags/Spring/index.html","8738e800c9e23e82c62eb3439a837a7b"],["/tags/SpringMVC/index.html","15e5ad2f8bfd002964f7f5a29b79050c"],["/tags/index-1.html","2243853ccf52d09a6470dca2c309c42b"],["/tags/index.html","b086413cc5a2596445ed9328d7f8f6d3"],["/tags/nginx/index.html","43f1d8fac66e570e59b69bf9c5801003"],["/tags/tomcat/index.html","f0aa791098c8e94ef310d4716dca1970"],["/tags/字符编码/index.html","d708f69a0d260c1fd68e95eac6da076d"],["/tags/负载均衡/index.html","fbff859f00160cb2d7fab014fc1678d6"]];
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







