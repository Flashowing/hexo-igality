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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","c98efdb3a99f2b5410e8c245ff1a37a5"],["/2020/06/24/linux防火墙常用命令/index.html","a962be38432d0f464ded865aa967ac83"],["/2020/06/24/redis命令/index.html","3cf4be967117af263e9055d9ece8a36b"],["/2020/06/29/博客项目/index.html","b0ba29fc3028ed13d89ac5379f171c24"],["/2020/07/01/07_SPRING_DAY01/index.html","682ccaa22fd0d87cd6da4d1e5a14ba81"],["/2020/07/01/07_SPRING_DAY02/index.html","2ec2cc6a929aad44e5919be75365016b"],["/2020/07/02/IntellijIDEA快捷使用/index.html","877322d86e86e4157953048be0733909"],["/2020/07/03/07_SPRING_DAY03/index.html","d1220b748989d56c36b5b9a94b3bcdef"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","c247e4604014bbaa93fd0fc746caa958"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","91c60f582a797e27d2b5330d230b804d"],["/2020/07/04/hello-world/index.html","eb29daaf9d6e3d736defef8bb2ae25e9"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","f364851a46be95bb76e4fbe2ea459361"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","d86bc54b74d1f11bcc23937f146fe8bf"],["/2020/07/06/tomcat去掉项目名/index.html","d691832be55727cde8705c9b1ff27716"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","66f9d3eea58a407ee2653e285d7ac814"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","02635fe45f914600663d083dc2d9fe23"],["/2020/07/08/09_MYBATIS_DAY02/index.html","ea577b9eb28e9b1845639cfc659f9340"],["/2020/07/10/09_MYBATIS_DAY03/index.html","fb9bef3b51e969719134392ebbb2946c"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","372becd47aa924b42ecff2bf35a3be61"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","e55cdf1136290c4c28ea98b2b4d50966"],["/404.html","a9e7ba2c7b9300d30a357ab2e29e09eb"],["/archives/2020/04/index.html","086235c02d47549bf3db3f7047f91093"],["/archives/2020/06/index.html","01ec808e0ce433b1cba7b80cd30f9a57"],["/archives/2020/07/index.html","2944f66d2053e7b3c8417d3de07614d9"],["/archives/2020/07/page/2/index.html","a9eeaae6d25704537d4982451b72253e"],["/archives/2020/index.html","caba9fb569bb87eaf92bd54a73501b2e"],["/archives/2020/page/2/index.html","df9a90592c6bca8a37c0c115ab84a335"],["/archives/index.html","7a1e465511dad993a28983618a17da62"],["/archives/page/2/index.html","da0ea0f18f24eabb5eeda4250d2972c9"],["/artitalk/index.html","4b762e004a697732d69eb54f01eb7c0d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","e5561c2045c041d2d4ff0566b19436b0"],["/categories/index.html","1d34ad8dbcccc6094e61283daf01ce0d"],["/categories/达内笔记/index.html","f0e75fe70e6e03a7ca0278b9b8641027"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b66239cedead08f3e1c93d1ae0bc5f4e"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","64e8712ae5e35f3e77cadeabfeb35d91"],["/messageboard/index.html","19d9d3d6f2c2ba7fe0c38c1a0a8aef0d"],["/music/index.html","f04eadd2d772ae4f1242abe613e62d5c"],["/page/2/index.html","e5d45ae1ea69cb8f63d0b633700c0561"],["/reprint/index.html","d68a5e31905779db9dbb1ae31ae72c56"],["/reprint/index的副本.html","86b8f5f920e5b586fd0c5b6df9ebf4a6"],["/tags/Artitalk/index.html","0a69f9f99690b80c5bd61e360aff7bdb"],["/tags/Exception/index.html","385954f737e58e3084db2227f84f5e0a"],["/tags/MyBatis/index.html","ea70a4505c54b6d9d873e24a948a3c19"],["/tags/Spring/index.html","da57e330131204cb289c91b872a4b77b"],["/tags/SpringMVC/index.html","28a7744b415a93f55a6bc0aba75bb8f0"],["/tags/hexo/index.html","fc824a67f3ffa782962c5f073ea2fbd2"],["/tags/index-1.html","eaf68e7b0600454a31c61295a5cd42af"],["/tags/index.html","8d7ee7345acfefa521f13b7e311d0ee7"],["/tags/nginx/index.html","06a80530fbd1f99a30c2779686a8beb2"],["/tags/tomcat/index.html","6b71a79b8127326aa003a863dc5e303e"],["/tags/字符编码/index.html","42ed317a8404c35ac0eb2859ce2d76d9"],["/tags/负载均衡/index.html","91d11a63561e6a60d09056706aef5c4b"]];
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







