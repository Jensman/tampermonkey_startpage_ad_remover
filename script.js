// ==UserScript==
// @name         Remove Ad Container
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.startpage.com/sp/search
// @icon         https://www.google.com/s2/favicons?sz=64&domain=startpage.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const maxTries = 10;
    const idsToRemove = ['gcsa-top', 'adBlock'];

    const removeById = (id) => {
        const elem = document.getElementById(id);
        console.log("try to remove ad iframe");
        removeElem(elem, 0);
    };
    const removeSection = () => {
        const elems = document.getElementsByTagName('section');
        removeElem(elems[0], 0);
    }
    const removeElem = (elem, tryCount) => {
        console.log("try to remove ad iframe");
        if(elem) {
            console.log("found, calling remove()");
            elem.remove();
        }else {
            if(tryCount <= maxTries){
                console.log("ads not not found, trying again later...");
                setTimeout(() => removeElem(elem, tryCount++), 100);
            } else {
                console.log(`did not find elem in ${tryCount} tries, giving up.`);
            }
        }
    }
    removeSection();
    //for( let id of idsToRemove) removeById(id);
})();
