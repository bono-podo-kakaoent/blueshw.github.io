/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-96f5516f438e60031cee.js"
  },
  {
    "url": "app-7cdf8bd2a5a074a641a2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b88709d3729d93bde440.js"
  },
  {
    "url": "index.html",
    "revision": "80f991a2848a09844cbf75336718c530"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b2c8d0540dae44f67b65e4e38139a62b"
  },
  {
    "url": "0.87817ebaf282a1cdf710.css"
  },
  {
    "url": "1.4ca178ac485c6f0e938d.css"
  },
  {
    "url": "1-ff6484340afe4fb7ddba.js"
  },
  {
    "url": "component---src-pages-index-js-e05b67a07ba44bca1e06.js"
  },
  {
    "url": "0-1749857918fadd81e8c7.js"
  },
  {
    "url": "static/d/212/path---index-6a9-QJ0n0CvN4hXAWvQ66q9VGV8up0.json",
    "revision": "433aea36fe6d7fa2601a34f19da7dc73"
  },
  {
    "url": "component---src-pages-404-js-e9e755ddbdba73032712.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});