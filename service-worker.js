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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","4d64a337d7d233e908ffc8a0ecd14f46"],["/2020/06/24/linux防火墙常用命令/index.html","d32cb69aff90887288a5f0f40b101be4"],["/2020/06/24/redis命令/index.html","352e4a76aebce660610c79944cf85681"],["/2020/06/29/博客项目/index.html","e85292f90e4eb6959d5a130b8261a7fe"],["/2020/07/01/07_SPRING_DAY01/index.html","4455c752a3ef5fc7819b21c51503c4fd"],["/2020/07/01/07_SPRING_DAY02/index.html","79a586b8fb66a2b27015445040c906df"],["/2020/07/02/IntellijIDEA快捷使用/index.html","3fe0b35b96ada9e9f9926870e88caf6d"],["/2020/07/03/07_SPRING_DAY03/index.html","ff2eaac78d39cfa2864fd8fe3f23f19d"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","e41b01fc97804d6afce5128bf3ba2fef"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","b64ad8ea0f0d8d9df5eefc035bde9389"],["/2020/07/04/hello-world/index.html","c76b0f837de54756038f1c8ed688bce0"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","455dcd4c528a46f6e3e29150db913e41"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","06b03e7b20ed8cd579ded82843711fb6"],["/2020/07/06/tomcat去掉项目名/index.html","d452f2d81f82ac1d550574d28a4521d5"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","78792e98d2b660ded265ea61748966ba"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","488e1e0d931c98705ca35d5aea574dbc"],["/2020/07/08/09_MYBATIS_DAY02/index.html","1b0357bfe6ec82980699e9b9689d53b1"],["/2020/07/10/09_MYBATIS_DAY03/index.html","844d155dc8f5be5de888cfee1b700f2c"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","bd427ea119e13547968da29992a7c736"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","a3cdffdcc61ad89ea17b5dd945e5f706"],["/2020/07/20/网站建设方案书/index.html","6b5a355c0ee42fb0211e0f53e379b477"],["/404.html","a098f7e07ff652ccfd81d48fbee6168a"],["/archives/2020/04/index.html","ab467ce7cbbcf28d18f6b6e6f52484f8"],["/archives/2020/06/index.html","bd60646cca475beeb6c28c5dfad3309f"],["/archives/2020/07/index.html","a63fb135912aac24f39532f3f2b6d77b"],["/archives/2020/07/page/2/index.html","a2fc46901eb16630c8d224769dbd904d"],["/archives/2020/index.html","bb521b9ba29a3f1abadcd1a2c1088392"],["/archives/2020/page/2/index.html","d20f96bd7e480d87bd57eeac052831fa"],["/archives/2020/page/3/index.html","0c39a37c81f10d6802fd7080454e1ab3"],["/archives/index.html","42cb8f1fddf930c8f40add49f0611e97"],["/archives/page/2/index.html","dd987b4b28b94a5a663c3da19a5b5e3d"],["/archives/page/3/index.html","08e41fc9f090ff6dfd643dfeae44dee2"],["/artitalk/index.html","3562a9be728030540fb26be2466a51d9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","8f4057df40b2bce4032ffb4e6163c8ac"],["/categories/index.html","750e8936f97a4143ca0da167f019ac72"],["/categories/达内笔记/index.html","4bdd60d4cd38a6f6740bf327ac4684ba"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-192x192.png","baf810c2574e7bd54b4a1ff89a19ae61"],["/images/icons/android-chrome-512x512.png","67d7b3006e50dcd102fb46f37a6902a2"],["/images/icons/apple-touch-icon.png","9aad7082cca5fd98436be933719ee455"],["/images/icons/favicon-16x16.png","d2ccd48433abbdec366bda058b1e91c2"],["/images/icons/favicon-32x32.png","c607d0d214c20fb91867ada4ae7de60b"],["/images/icons/icon-128x128.png","7f00dfade0a919afd18b63da63829f1d"],["/images/icons/icon-144x144.png","7545696f9bc85a308826810e3906f116"],["/images/icons/icon-152x152.png","e5b60af289d373da1e4700cb44417ab5"],["/images/icons/icon-192x192.png","b044dbed6fb8c26cc766da96bcced6af"],["/images/icons/icon-384x384.png","4462150894b7295af5b5498045601d77"],["/images/icons/icon-512x512.png","93298d8fd0b18922105c2ff61b730ebd"],["/images/icons/icon-72x72.png","3286a669288803ca56aeafd48376b58d"],["/images/icons/icon-96x96.png","49af782be4e240bf635bef18848ef030"],["/images/icons/mstile-150x150.png","2fa9f2e168112e6e0a8d353f266865a9"],["/images/icons/mstile-310x150.png","89673fed83899c1fd9cff0c84aca0364"],["/images/icons/mstile-310x310.png","9a7470fe8e89723f771a232005444140"],["/images/icons/safari-pinned-tab.svg","9f2a0336a4719eefd859e7e1b329f58c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ae97486ab683b6d1b22ff506d68a1cad"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","4bda1118bb5d3eaed4654020e7ec4208"],["/messageboard/index.html","09f2b9bde4c6c4f5741c95319437f61e"],["/music/index.html","b2d403357931bcd0811f7316428655ba"],["/page/2/index.html","b5ccd9418a243026691a485b7fb83a01"],["/page/3/index.html","7b7f9586ef946de2c78fe96bec5ed88a"],["/reprint/index.html","9fd62043135196f820329e9cc5e70986"],["/reprint/index的副本.html","629fcbc53a1b47f9f55bdbc8650de9bb"],["/tags/Artitalk/index.html","6b1608f040c15536f175245cfea5059b"],["/tags/Exception/index.html","5119a27f69b8f072b05af330a08cc716"],["/tags/MyBatis/index.html","b45df0cbbd7eb362ddc3b257347185dd"],["/tags/Spring/index.html","e2bdf006cde760732d8fe34840d4abea"],["/tags/SpringMVC/index.html","9be3a9348bdadcbbb20a7a55e68c39d6"],["/tags/hexo/index.html","0738f08a9120984cbc4f9806806c7193"],["/tags/index-1.html","92d75bee2943ad206d28e7809518934d"],["/tags/index.html","fc00468cb76d2e0b58815d0e8b78963d"],["/tags/nginx/index.html","27dd937f5093d8082099fe0812cd1f9c"],["/tags/tomcat/index.html","be8a414af7f7c3cf113b7b2f411d6a25"],["/tags/字符编码/index.html","60c7991db7979aeacb84139107627340"],["/tags/负载均衡/index.html","6e5ec181539a12ae7cedcc6f8e3ce7cd"]];
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







