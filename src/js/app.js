// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';

import './modules/phone-animation';
import subscription from './modules/subscription';
import './modules/contact';
import './modules/parallax';
import './modules/modal-video';

// When DOM is ready
$(() => {
  subscription();
});
