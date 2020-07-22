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

var precacheConfig = [["/2020/03/30/Java十万个为什么/index.html","b1c648d65ab049e20e5c3cd7ca8aec59"],["/2020/04/08/面试题笔记/index.html","669eba10874cdaccd111343191fd0752"],["/2020/06/24/linux防火墙常用命令/index.html","7c097f41ca6865144c0ebd71ae2db098"],["/2020/06/24/redis命令/index.html","2cd417aa7f888937d06bb36823071672"],["/2020/06/29/博客项目/index.html","742129a43878e74ff659e9a846c7f9fd"],["/2020/07/01/07_SPRING_DAY01/index.html","460a96ffa0007718ece0c2c5c40eafb0"],["/2020/07/01/07_SPRING_DAY02/index.html","5a38c19f5fbcd9e771aed9fe776908c8"],["/2020/07/02/IntellijIDEA快捷使用/index.html","fd2d2af4aaf62ef6f50b0018fa5b1915"],["/2020/07/03/07_SPRING_DAY03/index.html","a6b3077e5ab3cf6676934168ec8be30b"],["/2020/07/04/08_SPRINGMVC_DAY01/index.html","eb67fb764687fb55ed321e524acd289e"],["/2020/07/04/08_SPRINGMVC_DAY02/index.html","bbd3ceee3bc8ab7a0b62bcd6f208cd42"],["/2020/07/04/hello-world/index.html","454e83d4f26d172a03e63e9590fe4d36"],["/2020/07/06/08_SPRINGMVC_DAY03/index.html","1e39c6a7d3a5446b1f1d09696ed41e90"],["/2020/07/06/2020-07-06-Exception和Error有什么区别（转）/index.html","6d876eacd38df6a29fe30887ff596170"],["/2020/07/06/tomcat去掉项目名/index.html","e60e492bea4d1a98a493d44171f4fb54"],["/2020/07/08/09_MYBATIS_DAY01_1748/index.html","139a891846a30e0404df34d310d5f649"],["/2020/07/08/09_MYBATIS_DAY01_PLUS/index.html","110126026cb432f416526ed2c8cc9379"],["/2020/07/08/09_MYBATIS_DAY02/index.html","088fd117ac6ec267104258e94150b015"],["/2020/07/10/09_MYBATIS_DAY03/index.html","b987c59ee4cad4a78b0ad4acc530b578"],["/2020/07/11/使用Artitalk为hexo添加说说功能/index.html","d75686ed7a3813a70f439e5a9c17bdb7"],["/2020/07/17/2020-07-17-Hexo问题解决/index.html","18ddcc3f38f393428335e0d50d5020da"],["/2020/07/20/网站建设方案书/index.html","a7f20e7856408dcd4da42a826f4da35a"],["/404.html","dcc23a78662dcf93d04659934e1cec0b"],["/archives/2020/03/index.html","0d1bb6f7714637423b632cad53266e6b"],["/archives/2020/04/index.html","de161162fa30a0a943d9fa2a42d7ade7"],["/archives/2020/06/index.html","bf91fb767b1ad7c4eb8fccf678e026df"],["/archives/2020/07/index.html","f7f31031427fca86f131e414e237bb03"],["/archives/2020/07/page/2/index.html","8ba102c73d1e2fea404c15216597782f"],["/archives/2020/index.html","69591ef29979682c60108a0ec1529380"],["/archives/2020/page/2/index.html","b0ab105fb491879998e78b7fda1390ae"],["/archives/2020/page/3/index.html","f5321287169bebe36ed21a5a9ca26d73"],["/archives/index.html","455abbb7c5099ad6abb09228e5c8cd29"],["/archives/page/2/index.html","a0d28a667625885e0fbc94086972f408"],["/archives/page/3/index.html","3032e4255078e84e683f6a33a1bf33fa"],["/artitalk/index.html","37455b172c5d06cc98b6bb0357bb132b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","21a96d57b47c0f1a0375addff49b8ccf"],["/categories/index.html","a74264660d03d9ec21620d28e4bbbb3c"],["/categories/达内笔记/index.html","2c2c0050555e162e6eaee7af9f334190"],["/css/index.css","7be29b3ddf4e4c10cafac465c8a3318d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/android-chrome-192x192.png","baf810c2574e7bd54b4a1ff89a19ae61"],["/images/icons/android-chrome-512x512.png","67d7b3006e50dcd102fb46f37a6902a2"],["/images/icons/apple-touch-icon.png","9aad7082cca5fd98436be933719ee455"],["/images/icons/favicon-16x16.png","d2ccd48433abbdec366bda058b1e91c2"],["/images/icons/favicon-32x32.png","c607d0d214c20fb91867ada4ae7de60b"],["/images/icons/icon-128x128.png","7f00dfade0a919afd18b63da63829f1d"],["/images/icons/icon-144x144.png","7545696f9bc85a308826810e3906f116"],["/images/icons/icon-152x152.png","e5b60af289d373da1e4700cb44417ab5"],["/images/icons/icon-192x192.png","b044dbed6fb8c26cc766da96bcced6af"],["/images/icons/icon-384x384.png","4462150894b7295af5b5498045601d77"],["/images/icons/icon-512x512.png","93298d8fd0b18922105c2ff61b730ebd"],["/images/icons/icon-72x72.png","3286a669288803ca56aeafd48376b58d"],["/images/icons/icon-96x96.png","49af782be4e240bf635bef18848ef030"],["/images/icons/mstile-150x150.png","2fa9f2e168112e6e0a8d353f266865a9"],["/images/icons/mstile-310x150.png","89673fed83899c1fd9cff0c84aca0364"],["/images/icons/mstile-310x310.png","9a7470fe8e89723f771a232005444140"],["/images/icons/safari-pinned-tab.svg","9f2a0336a4719eefd859e7e1b329f58c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a30daed90dcae233db6736c16a200b08"],["/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["/js/utils.js","f2f712d5d52625b377855945420eea15"],["/link/index.html","636d9952f1461a4bfe72f8d599de9530"],["/messageboard/index.html","ab0262ddf1191efa33c69ec022248297"],["/music/index.html","9ff374b8b4941f346d82b8b3ab698fcb"],["/page/2/index.html","577ab79bdc8e0be811c1373e356643c6"],["/page/3/index.html","bc013cec0b7f70dd47d40563929e20c0"],["/reprint/index.html","7527c99aac9a6ed109369d036205d2ed"],["/reprint/index的副本.html","4062019b9312b2fc4e071d6cc8be65bb"],["/tags/Artitalk/index.html","3fd7aa1a44d9783c0a6e08cb27bea999"],["/tags/Exception/index.html","dc89cee1e7c521786483b4dcc8ebad4f"],["/tags/Hexo/index.html","8cd7e12eb1da2fa651608787725f8790"],["/tags/MyBatis/index.html","2d6bc79ee963e10139e873e14a5e018b"],["/tags/Spring/index.html","1ae7a18a2efd1081ca2bbb2b309d9f32"],["/tags/SpringMVC/index.html","7645e7971b7bd5c9a0820753353c1ff1"],["/tags/index-1.html","45538685d1a3720ffc6a97d1cddcca6c"],["/tags/index.html","89acb0e3a23e0fd3c4c3224decf648d5"],["/tags/nginx/index.html","006a32a6828e0cbc6c573e2a5f32ef52"],["/tags/tomcat/index.html","7b6daf6e903a6d22976414ae670bcc0a"],["/tags/字符编码/index.html","638b04b1dc625c12367ad17deff8d81f"],["/tags/负载均衡/index.html","6b90760caaebb78285af7615798c3bc9"],["/tags/面试题/index.html","c47ce5b348c6f607548a2b47969971f5"]];
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







