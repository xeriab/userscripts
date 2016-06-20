// ==UserScript==
//
// @name        Facebook Arabic Font Fix
// @namespace   Facebook
// @description Fix Facebook font for Arab users
// @author      Xeriab Nabil (aka KodeBurner) <kodeburner@gmail.com>
// @encoding    utf-8
// @license     MIT
// @icon        https://raw.github.com/xeriab/userscripts/master/artwork/facebook-arabic.png
// @homepage    https://xeriab.github.io/projects/userscripts/
// @twitterURL  https://twitter.com/xeriab
// @facebookURL  https://facebook.com/xeriab
// @include       http://facebook.com/*
// @include       https://facebook.com/*
// @include       http://*.facebook.com/*
// @include       https://*.facebook.com/*
// @include       javascript:*
// @run-at        document-start
//
// ==/UserScript==

/*jslint browser: true, vars: true */
/*jshint unused: true, strict: true, nonew: true */
/*globals GM_addStyle, PRO_addStyle, addStyle */

(function () {
    'use strict';

    var style = [
        '/* Applies font to all generic HTML tags */',
        '',
        '* {',
        '',
        "    font-family: 'Segoe UI', 'Noto Naskh Arabic', 'Tahoma', sans !important;",
        '',
        '}'
    ].join('\n');

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(style);
    } else if (typeof PRO_addStyle !== 'undefined') {
        PRO_addStyle(style);
    } else if (typeof addStyle !== 'undefined') {
        addStyle(style);
    } else {
        var node = document.createElement('style');
        var docHeads = document.getElementsByTagName('head');

        node.type = 'text/css';
        node.appendChild(document.createTextNode(style));

        if (docHeads.length > 0) {
            docHeads[0].appendChild(node);
        } else {
            // No head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }

}());
