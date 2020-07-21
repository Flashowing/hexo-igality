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

var precacheConfig = [["/2020/03/30/Java十万个为什么/index.html","7d659b7348a2ef5fddba5043d8ef4acc"],["/2020/04/08/面试题笔记/index.html","017459f379d747380569b387f38a3e37"],["/2020/06/24/linux防火墙常用命令/index.html","bac9039e409ab55969f4690d0a38863b"],["/2020/06/24/redis命令/index.html","ac67e3ff965775afa0e22df2835ff05b"],["/2020/06/29/博客项目/index.html","83cbb4a5f21a3b634896d15b2ea8e60a"],["/2020/07/01/07_SPRING_DAY01/index.html","3431960151984b8e5fefdcf7f5dbf7f2"],["/2020/07/01/07_SPRING_DAY02/index.html","aad12e24e4d9c5fecc6b66d3b0fa9fb3"],["/2020/07/02/IntellijIDEA快捷使用/index.html","17dd93d0232ba324fd369f5b21a5f23d"],["/2020/07/03/07_SPRING_DAY03/index.html","3236a17ff4d34223ca56c101ca5606c7"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","9c8646c9d4f6d3e1969b7f74789b3545"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","f6a2f14f2853e1fb14e0c132d5b28e45"],["/2020/07/04/hello-world/index.html","3eefba17ab772eb4c172e599517b2854"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","63db9090fc73a8046538e473356d6e85"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","ceb5c491248fc6e7436fa64287be0f8a"],["/2020/07/06/tomcat去掉项目名/index.html","c87764e0db2d85bb3982cd80f473bfe9"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","e06ff8627ce20f0dbabdc5c08e753327"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","0a3d2471c04fe61d5bba920b0ab19c95"],["/2020/07/08/09_MYBATIS_DAY02/index.html","bf68ac199e246629489befe2bd33b852"],["/2020/07/10/09_MYBATIS_DAY03/index.html","80f022fa24db47579ac01dd9ddf81439"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","a2e923c8f9164c802c4ffd6e7920bbed"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","376324700ee005b1e5c2a8bb9ed99c6b"],["/2020/07/20/网站建设方案书/index.html","ddc4340279fa76fa62b5dec27e1d7997"],["/404.html","712b7357b25c3f370cf940220e6e075d"],["/archives/2020/03/index.html","d8918fbc8d92574a0efa2d19b44681a1"],["/archives/2020/04/index.html","2bc7350231f4592af81a251a05610f91"],["/archives/2020/06/index.html","4f9325dc9ee037bc2ae64c1a409c16ca"],["/archives/2020/07/index.html","2770b675355c719e62767d8b0c19918a"],["/archives/2020/07/page/2/index.html","6a13998e3aa7253a696f926757c242b7"],["/archives/2020/index.html","5d74de9fc02428ab39877b051ce5d3ae"],["/archives/2020/page/2/index.html","ab643926bc9b49c7a5655aeda01868db"],["/archives/2020/page/3/index.html","689c2c0583cdb38544f3cf445302b3c5"],["/archives/index.html","c9da58fde242dcd961f4199b0eba015c"],["/archives/page/2/index.html","f513e264a61080b432afa5fcb40ce8ac"],["/archives/page/3/index.html","03f2acdf0db7c3f5e67b37552bde572f"],["/artitalk/index.html","86dad6c59f88ffb2d85a2e2903d05eae"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","87bc5ff9b9c16cbfc3c4593b1db27f96"],["/categories/index.html","176c21045a62c0f5f0236a8533c5ee0e"],["/categories/达内笔记/index.html","925a2a2e090bd19e71715ccebacbc39a"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-192x192.png","baf810c2574e7bd54b4a1ff89a19ae61"],["/images/icons/android-chrome-512x512.png","67d7b3006e50dcd102fb46f37a6902a2"],["/images/icons/apple-touch-icon.png","9aad7082cca5fd98436be933719ee455"],["/images/icons/favicon-16x16.png","d2ccd48433abbdec366bda058b1e91c2"],["/images/icons/favicon-32x32.png","c607d0d214c20fb91867ada4ae7de60b"],["/images/icons/icon-128x128.png","7f00dfade0a919afd18b63da63829f1d"],["/images/icons/icon-144x144.png","7545696f9bc85a308826810e3906f116"],["/images/icons/icon-152x152.png","e5b60af289d373da1e4700cb44417ab5"],["/images/icons/icon-192x192.png","b044dbed6fb8c26cc766da96bcced6af"],["/images/icons/icon-384x384.png","4462150894b7295af5b5498045601d77"],["/images/icons/icon-512x512.png","93298d8fd0b18922105c2ff61b730ebd"],["/images/icons/icon-72x72.png","3286a669288803ca56aeafd48376b58d"],["/images/icons/icon-96x96.png","49af782be4e240bf635bef18848ef030"],["/images/icons/mstile-150x150.png","2fa9f2e168112e6e0a8d353f266865a9"],["/images/icons/mstile-310x150.png","89673fed83899c1fd9cff0c84aca0364"],["/images/icons/mstile-310x310.png","9a7470fe8e89723f771a232005444140"],["/images/icons/safari-pinned-tab.svg","9f2a0336a4719eefd859e7e1b329f58c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","aedd669c139f0f5263de2939f60bdc95"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","bd415facaec3d1b8fc39c744340d6eac"],["/messageboard/index.html","96f5fab0f3ac2d68eb14b9495908277b"],["/music/index.html","4cbcf10bfbea05524445caa1206198f0"],["/page/2/index.html","9485e41cf5d5368465771277195bd987"],["/page/3/index.html","254937c7c52caca2da2d8b8a4c1d8407"],["/reprint/index.html","35f3596ab11450377f9fca27bb385d8d"],["/reprint/index的副本.html","a4f66ff2d0c2588c39d66fd231052443"],["/tags/Artitalk/index.html","47ba9a9852f145a7f4c6eb8ae05d51e1"],["/tags/Exception/index.html","21d1e3ae25ae0fc0f2f65edc78bb284c"],["/tags/MyBatis/index.html","b36479d2090461a6ad56e0be07e45fe6"],["/tags/Spring/index.html","13759d0739345bcf92bb67d2beb0fd90"],["/tags/SpringMVC/index.html","65ed5858dd7696be8a80543091ae7636"],["/tags/hexo/index.html","ab629c0309b92468602c003cb3eb2b06"],["/tags/index-1.html","f4eb7c5c4e7b796552475746c0609fed"],["/tags/index.html","12720d1bb425706a2306830feb26e471"],["/tags/nginx/index.html","032b7b00b3df09c1404a549e68e1cf82"],["/tags/tomcat/index.html","96568e826bb9fccd2779712e909e242c"],["/tags/字符编码/index.html","388b4cbb4483d6f0fc0a26bc67a9ea9a"],["/tags/负载均衡/index.html","dd33ac9656a83b4735c634166ed57b5c"],["/tags/面试题/index.html","9c26fa5278895f1ac56a1bce874f8b1a"]];
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







