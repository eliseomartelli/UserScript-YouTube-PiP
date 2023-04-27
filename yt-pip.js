// ==UserScript==
// @name         YouTube PiP Shortcut
// @version      0.0.1
// @encoding     utf-8
// @description  Open PiP in YouTube with a shortcut
// @author       Eliseo Martelli
// @match        *://*.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @downloadURL  https://github.com/eliseomartelli/UserScript-YouTube-PiP/raw/main/yt-pip.js
// @updateURL    https://github.com/eliseomartelli/UserScript-YouTube-PiP/raw/main/yt-pip.js
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @run-at       document-body
// ==/UserScript==

/**
 * ⌥ + p
 *
 * @param {KeyboardEvent} e - Keyboard Event
 */
const KEY_COMBINATION = (e) => e.key === "π";

(function () {
  "use strict";
  const video = document.querySelector("video");
  document.onkeydown = (e) => {
    if (KEY_COMBINATION(e)) {
      const isPiP = document.pictureInPictureElement !== null;
      video.webkitSetPresentationMode(isPiP ? "inline" : "picture-in-picture");
    }
  };
})();
