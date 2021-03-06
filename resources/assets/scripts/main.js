// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

import slider from './components/slider';
import taboffert from './components/taboffert';
import rotator from './components/rotator';
import hamburger from './components/hamburger';
//import popup from './components/popup';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs
  aboutUs,
});

// Load Events
jQuery(document).ready(() => {
  routes.loadEvents();
  slider.init();
  rotator.init();
  hamburger.init();
  taboffert.init();
 // map.init();
  //popup.init();
});

// setTimeout(()=> {
//   slider.resize();
// }, 1000)
