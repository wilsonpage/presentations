(function(define){define(function(require,exports,module){
/*jshint esnext:true*/
'use strict';

/**
 * Dependencies
 */

var component = require('gaia-component');
require('gaia-icons');

/**
 * Exports
 */

module.exports = component.register('gaia-form', {
  extensible: false,

  created: function() {
    this.setupShadowRoot();
  },

  submit: function(e) {

  },

  template: `
    <div class="inner"><content></content></div>
    <style>

    :host {
      display: block;
      margin-top: var(--base-m, 18px);
      margin-bottom: var(--base-m, 18px);
      font-size: 17px;
      color: var(--text-color);
    }

    ::content > *:not(style) {
      display: flex;
      margin-top: var(--base-m, 18px);
      justify-content: center;
    }

    ::content > li > label {
      display: flex;
      align-items: center;
      flex: 1;
    }

    ::content > li h3 {
      display: block;
      font-weight: 400;
      margin: 0;
      min-width: 0;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-style: normal;
    }

    ::content > li {
      position: relative;
      z-index: 2;

      box-sizing: border-box;
      display: flex;
      width: 100%;
      min-height: 60px;
      padding: 9px 16px;
      margin: 0;
      border: 0;
      outline: 0;

      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      text-align: start;
      align-items: center;
      list-style-type: none;
    }

    ::content > li:before {
      content: '';
      position: absolute;
      top: 0px;
      left: 16px;
      right: 16px;
      height: 1px;

      background:
        var(--border-color,
        var(--background-plus));
    }

    ::content > li:first-child:before {
      display: none;
    }

    ::content > *:first-child {
      margin-top: 0;
    }

    ::content > * > *:not(style) {
      display: block;
      margin: 0 var(--base-m, 9px) !important;
    }

    ::content div > :first-child { margin-left: 0 !important; }
    ::content div > :last-child { margin-right: 0 !important; }

    ::content [divider] {
      width: 1px;
      margin: 0 16px;

      align-self: stretch;

      background:
        var(--border-color,
        var(--background-plus));
    }

    /**
     * [flexbox]
     *
     * A helper attribute to allow users to
     * quickly define content as a flexbox.
     */

    ::content [flexbox] {
      display: flex;
    }

    /**
     * [flex]
     *
     * A helper attribute to allow users to
     * quickly define area as flexible.
     */

    ::content [flex] {
      flex: 1;
    }

    </style>`
});

});})((function(n,w){return typeof define=='function'&&define.amd?
define:typeof module=='object'?function(c){c(require,exports,module);}:function(c){
var m={exports:{}},r=function(n){return w[n];};w[n]=c(r,m.exports,m)||m.exports;};})('gaia-form',this));