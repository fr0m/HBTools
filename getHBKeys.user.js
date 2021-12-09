// ==UserScript==
// @name         getHBKeys
// @namespace    https://github.com/fr0m/HBTools
// @version      0.1
// @description  get Humble Bundle keys in console
// @author       fr0m
// @updateURL    https://github.com/fr0m/HBTools/raw/main/getHBKeys.meta.js
// @downloadURL  https://github.com/fr0m/HBTools/raw/main/getHBKeys.js
// @match        https://www.humblebundle.com/downloads*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
  
    const keyNodeSelector = '.key-redeemer';
    const keyNameSelector = '.heading-text h4';
    const keySelector = '.keyfield-value';

    const getKeys = () => {
      const keyNodes = document.querySelectorAll(keyNodeSelector);
      let keys = [];
      keyNodes.forEach(node => {
        const name = node.querySelector(keyNameSelector).innerText;
        const key = node.querySelector(keySelector).innerText;
        
        keys.push({
          name,
          key
        });
      });
      
      console.log(keys.map(({ name, key }) => `${name}: ${key}`).join('\n'));
      return keys;
    }
    
    window.getHBKeys = getKeys;
})();
