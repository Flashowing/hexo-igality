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

var precacheConfig = [["/2020/04/08/面试题笔记/index.html","50425ae8db52e93b056188117d4601a6"],["/2020/06/24/linux防火墙常用命令/index.html","5b222de6c438ff38f8d769d53177bd57"],["/2020/06/24/redis命令/index.html","b88399ee27b101242f13c887dfcfca7c"],["/2020/06/29/博客项目/index.html","73c5c7d5573c55d83616a5dd8a0f2c55"],["/2020/07/01/07_SPRING_DAY01/index.html","4de0551300533e3f9f9c97b29eb5c272"],["/2020/07/01/07_SPRING_DAY02/index.html","13e43d47d8c893a4817d7a1a02182131"],["/2020/07/02/IntellijIDEA快捷使用/index.html","2c76f9a745dffecc6938d78db1a86cf4"],["/2020/07/03/07_SPRING_DAY03/index.html","6aeb60d847d3af67a66d0164d47ead4c"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","cbb9affb36619a6791d683ab1d118442"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","24dda3067c192a6f594ee13e1af185a8"],["/2020/07/04/hello-world/index.html","22aeedc7b17aacc9ff2d3fade29cd923"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","7db36031bb0351c92817ee130137384b"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","49ca2c07997a9a2173fcc9375a05ac43"],["/2020/07/06/tomcat去掉项目名/index.html","0b7e3b0cb95f3fa8ba8ca6a8b4233472"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","1fb014426d93c49686e02411be4bdd76"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","1b32a715116a42c00e6b389199625b2b"],["/2020/07/08/09_MYBATIS_DAY02/index.html","1880af26429eb93b0a85ce343b562357"],["/2020/07/10/09_MYBATIS_DAY03/index.html","30b7fc96c9b0b2aa75a73b91f40e04f1"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","517a801ed1902218fb1dfd414940df50"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","c79fce32c34144ce8fa87eb4c2c08675"],["/404.html","a9a6986d357b90f5faba39f9108cd09c"],["/archives/2020/04/index.html","1eaf23f97e0e4848dd7aa62536e3707e"],["/archives/2020/06/index.html","712103f1b520dba137adde6af1a44758"],["/archives/2020/07/index.html","213cd4ac264d6819b197fd82f7b4558c"],["/archives/2020/07/page/2/index.html","6bc311d067ecb9270b9f452483ebff8e"],["/archives/2020/index.html","07c5e5e7bacff1bc73be618f0e732a12"],["/archives/2020/page/2/index.html","3fce644ac012ec693758525f7635561d"],["/archives/index.html","01007d5542802f8cd65a0ed2f06184dd"],["/archives/page/2/index.html","1c8a5ee5d312cc74fdc330c84711bf0e"],["/artitalk/index.html","e008ee2f58ef9f4e58f8d02a6d3a85b7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","461ded67d739956dff41eccc336b903e"],["/categories/index.html","1dbb6014adcd1bec8b626fd2f3721788"],["/categories/达内笔记/index.html","6840231c21150ed540ea16ca0eb5723e"],["/css/index.css","fdf8435e613c309d9bcb1e2b4270d02a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/apple-touch-icon.png","b050aa1e325f6fe595cac1910c4ac6f4"],["/images/icons/favicon-16x16.png","c9f17a93c8c411cd8da36a228632026c"],["/images/icons/favicon-32x32.png","27d06d0359b65196d967aa0614beb885"],["/images/icons/icon-128x128.png","5cd6cca76adea0af2a7b8c38ff54c97e"],["/images/icons/icon-144x144.png","d677ef7eff1f964c872b1311976bfa1a"],["/images/icons/icon-152x152.png","724485f33a4aa4092d7cb20da7d600f9"],["/images/icons/icon-192x192.png","cbd52dabf176e01f2480c5de271390a8"],["/images/icons/icon-384x384.png","e7ed3e9df475b3e41779773bace8a4ba"],["/images/icons/icon-512x512.png","dfdaaaba6f495f27ff7e129d134b8a74"],["/images/icons/icon-72x72.png","289dcec46f3294a6e0ee964ec2d95c0d"],["/images/icons/icon-96x96.png","8467c597f81bd4289ef0efd9fa8c1f7d"],["/images/icons/safari-pinned-tab.svg","d51c542afd4ab434dcc850cc26bbc3e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b170808554e5aef2a93b372da4ec6cce"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","b37093b3a1dc96dc8325be0995e5dbb5"],["/messageboard/index.html","3fe1bee0c0b27550191b19b1734b9910"],["/music/index.html","cacfc74b079cd09e2d6ba99342749e2b"],["/page/2/index.html","a8cbdaf34a46a9ec51d65a672ccc9365"],["/reprint/index.html","2142bdaf1870c97ace43fb1f0aa1342d"],["/reprint/index的副本.html","fd326cc43a4f604f4ad737d8cb20b3c0"],["/tags/Artitalk/index.html","83317a6748d1900efc036c08951908b3"],["/tags/Exception/index.html","bc15143908b07081d0dd898d3fa3629d"],["/tags/MyBatis/index.html","50b225ace457ff97df37baabcda316e9"],["/tags/Spring/index.html","b576e2f5bbbf54cccf888a65cddd5969"],["/tags/SpringMVC/index.html","fe57e9bd1f7e8cf06dc92f33e0adebca"],["/tags/hexo/index.html","550cd1a0aa172a0ce2b492734269cc76"],["/tags/index-1.html","20ca1dedcf1748a26cd9ec52eb63626c"],["/tags/index.html","d805fd8c79de73f58d9c0a9514ca1673"],["/tags/nginx/index.html","cfbfa11452e3acdd5b7264844d04497f"],["/tags/tomcat/index.html","aa2040933a3b3b03f0cc79ea12843824"],["/tags/字符编码/index.html","629507ecdcf0e892ded771cef46ee62f"],["/tags/负载均衡/index.html","f7e51a03f4605f3f5d5fd00ea7ca4446"]];
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







