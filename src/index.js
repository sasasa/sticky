'use strict';
// import '@babel/polyfill';


import Stickyfill from 'stickyfilljs';

// import "es6-promise/auto";
// import "fetch-polyfill";

import './style.scss';


Stickyfill.add(document.querySelectorAll('.sticky'));
