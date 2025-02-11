/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General Reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Body Styling */\nbody {\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n    color: #333;\n    background-color: #f9f9f9;\n    line-height: 1.6;\n    padding: 20px;\n}\n\n/* Container */\n#content, #menu, #about, #home{\n    max-width: 800px;\n    margin: 0 auto;\n    background-color: #fff;\n    padding: 20px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n}\n\n/* Headings */\nh1, h2, h3, h4 {\n    color: #444;\n    margin-bottom: 10px;\n}\n\nh1 {\n    font-size: 2.5em;\n    font-weight: bold;\n}\n\nh2 {\n    font-size: 2em;\n    font-weight: normal;\n}\n\nh3 {\n    font-size: 1.5em;\n    font-weight: normal;\n}\n\nh4 {\n    font-size: 1.2em;\n    font-weight: normal;\n}\n\n/* Text Elements */\np {\n    margin-bottom: 15px;\n}\n\nem {\n    font-style: italic;\n    color: #666;\n}\n\n/* Links */\na {\n    color: #007BFF;\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n/* Lists */\nul {\n    list-style-type: disc;\n    margin-left: 20px;\n    margin-bottom: 15px;\n}\n\nli {\n    margin-bottom: 5px;\n}\n\n/* Review Section */\n.review {\n    font-style: italic;\n    background-color: #f0f0f0;\n    padding: 15px;\n    border-left: 4px solid #ccc;\n    margin-bottom: 20px;\n}\n\n/* Hours and Locations */\n.hours, .locations {\n    margin-bottom: 20px;\n}\n\n.hours h2, .locations h3 {\n    margin-bottom: 10px;\n}\n\n/* Menu Styling */\n#menu .category-title {\n    margin-top: 30px;\n    margin-bottom: 15px;\n    border-bottom: 2px solid #ddd;\n    padding-bottom: 5px;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    gap: 20px; /* Space between image and text */\n    background: rgba(255, 255, 255, 0.6);\n    padding: 15px;\n    border-radius: 8px;\n    backdrop-filter: blur(6px);\n    transition: transform 0.2s ease-in-out;\n}\n\n.menu-item h3 {\n    font-size: 1.3em;\n    color: #333;\n    margin-bottom: 5px;\n}\n\n.menu-item p {\n    color: #555;\n}\n\n/* Footer */\nfooter {\n    text-align: center;\n    margin-top: 40px;\n    font-size: 0.9em;\n    color: #888;\n}\n\n/* Responsive Design */\n@media (max-width: 600px) {\n    body {\n        padding: 10px;\n    }\n\n    #content, #menu {\n        padding: 15px;\n    }\n\n    h1 {\n        font-size: 2em;\n    }\n\n    h2 {\n        font-size: 1.5em;\n    }\n\n    h3 {\n        font-size: 1.2em;\n    }\n}\n\n.menu-item img {\n    width: 120px; /* Fixed width */\n    height: 120px; /* Fixed height */\n    object-fit: cover; /* Ensures images fill the area without stretching */\n    border-radius: 8px; /* Rounded corners */\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.menu-item:hover {\n    transform: scale(1.02);\n}\n\n.menu-text {\n    flex: 1;\n}\n\nnav {\n    display: flex;\n    justify-content: center; /* Centers items horizontally */\n    align-items: center; /* Aligns items vertically */\n    gap: 20px; /* Space between buttons */\n    padding: 15px;\n    background: rgba(255, 255, 255, 0.8);\n    backdrop-filter: blur(10px);\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);\n}\n\nnav a {\n    text-decoration: none;\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: #333;\n    padding: 10px 20px;\n    border-radius: 5px;\n    transition: background 0.3s ease-in-out;\n}\n\nnav a:hover {\n    background: rgba(0, 0, 0, 0.1);\n}\n\n/* 🔹 Active Page Styling (Optional) */\nnav a.active {\n    background: rgba(0, 0, 0, 0.15);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/about.html":
/*!************************!*\
  !*** ./src/about.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = `<main>\n    <section class=\"about-hero\">\n        <h1>About Los' Lumina</h1>\n        <p>Bringing Light to Global Flavors</p>\n    </section>\n\n    <section class=\"about-content\">\n        <h2>Our Story</h2>\n        <p>\n            Los' Lumina was born from a love of culture, cuisine, and the city that never sleeps. \n            Inspired by the diverse flavors Chef Carlos grew up with in NYC, our rooftop restaurant \n            is a fusion of global tastes brought to life in a stunning skyline setting.\n        </p>\n        \n        <h2>Our Mission</h2>\n        <p>\n            At Los' Lumina, we aim to bring light to the variety of cuisines and cultures that shaped our journey. \n            Every dish is a reflection of the bold flavors, vibrant streets, and unforgettable experiences that define New York City. \n            We believe food is more than just a meal—it’s a story, an experience, and a celebration of diversity.\n        </p>\n\n        <h2>Why Dine With Us?</h2>\n        <ul>\n            <li>🌇 Unmatched rooftop views of the city skyline</li>\n            <li>🍽️ Globally inspired dishes crafted with passion</li>\n            <li>🍸 Signature cocktails designed to elevate your night</li>\n            <li>🎶 Lively yet intimate ambiance for a perfect evening</li>\n        </ul>\n\n        <h2>Meet Chef Carlos</h2>\n        <p>\n            Born and raised in NYC, Chef Carlos’ culinary journey is deeply rooted in the flavors of the world. \n            From Latin spices to Mediterranean zest, he has crafted a menu that pays homage to his upbringing while offering a unique, modern twist.\n        </p>\n    </section>\n</main>\n\n<footer>\n    <p>&copy; 2025 Los' Lumina. All rights reserved.</p>\n</footer>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://top-restaurant/./src/about.html?");

/***/ }),

/***/ "./src/home.html":
/*!***********************!*\
  !*** ./src/home.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = `<div id=\"content\">\n    <div class=\"heading-container\">\n        <h4>Thanks for Visiting</h4>\n        <h1>Los' Lumina</h1>\n    </div>\n    <div class=\"review\">\n        \"Los' Lumina is the perfect blend of breathtaking skyline views, craft cocktails, and delicious bites.\n        The ambiance is elegant yet relaxed, with warm lighting and a lively atmosphere.\n        The Midnight Mojito was a must-try, and the truffle steak sliders were packed with flavor. \n        Service was top-notch, making the entire evening feel effortless. Whether you're here for sunset drinks or a late-night vibe, \n        Los' Lumina is the ultimate rooftop destination!\"\"\n        <em>- Urban Bites Magazine</em>\n    </div>\n    <div class=\"hours\">\n        <h2>Grab a table and enjoy the view!</h2>\n        <p class=\"MTWTFSS\">Sunday: 12PM - 8PM</p>\n        <p class=\"MTWTFSS\">Monday: 12PM - 10PM</p>\n        <p class=\"MTWTFSS\">Tuesday: 12PM - 10PM</p>\n        <p class=\"MTWTFSS\">Wednesday: 12PM - 10PM</p>\n        <p class=\"MTWTFSS\">Thursday: 12PM - 10PM</p>\n        <p class=\"MTWTFSS\">Friday: 10AM - 12PM</p>\n        <p class=\"MTWTFSS\">Saturday: 10AM - 12PM</p>\n    </div>\n    <div class=\"locations\">\n        <h3>We've been blessed to be able to bring the Lumina experiences to cities across the US!</h3>\n        <p class=\"NY\">New York: 1150 Broadway Entrance, New York, NY 10001</p>\n        <p class=\"NJ\">New Jersey: 550 Ave at Port Imperial, Weehawken Township, NJ 07086</p>\n    </div>\n    <div class=\"mission\">\n        <p><em>At Los' Lumina, we shine a light on the rich diversity of flavors and cultures that shaped Chef Carlos' upbringing in NYC.\n        Our mission is to blend global influences with bold, innovative cuisine, creating a rooftop dining experience that celebrates\n         the vibrant spirit of the city—one plate at a time.</em>       </p>\n    </div>\n</div>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://top-restaurant/./src/home.html?");

/***/ }),

/***/ "./src/menu.html":
/*!***********************!*\
  !*** ./src/menu.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Imports\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/bruschetta.jpg */ \"./src/menu-images/bruschetta.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/Calamari.jpg */ \"./src/menu-images/Calamari.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/papas.jpg */ \"./src/menu-images/papas.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/grilled-guacamole-I-howsweeteats.com-12.jpg */ \"./src/menu-images/grilled-guacamole-I-howsweeteats.com-12.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg */ \"./src/menu-images/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/Queso-Fundido-with-Chorizo-and-Poblanos-scaled.jpeg */ \"./src/menu-images/Queso-Fundido-with-Chorizo-and-Poblanos-scaled.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/tuna.webp */ \"./src/menu-images/tuna.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/Mediterranean-Grilled-Lamb-Chop-Recipe-with-Tomato-Mint-Quinoa-17.webp */ \"./src/menu-images/Mediterranean-Grilled-Lamb-Chop-Recipe-with-Tomato-Mint-Quinoa-17.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/sea.jpg */ \"./src/menu-images/sea.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/16983-butter-poached-lobster-with-linguine-600x600.jpg */ \"./src/menu-images/16983-butter-poached-lobster-with-linguine-600x600.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/menu-images/parmesan-truffle-fries-1-Edit-683x1024.jpg */ \"./src/menu-images/parmesan-truffle-fries-1-Edit-683x1024.jpg\"), __webpack_require__.b);\n// Module\nvar code = `<div id=\"menu\">\n    <div class=\"heading-container\">\n        <h1>Los' Lumina Menu</h1>\n        <h2>A fusion of global cuisines, offering a unique dining experience with breathtaking views.</h2>\n    </div>\n\n    <div class=\"category-title\" id=\"appetizers\">Starters & Small Plates\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_0___}\" alt=\"\">\n            <h3>Bruschetta Trio</h3>\n            <p>A trio of hand-crafted bruschetta:\n                <ul>\n                    <li class=\"item-option\">Golden Tomato & Basil Pesto with burrata and white balsamic drizzle.</li>\n                    <li class=\"item-option\">Truffle Mushroom & Whipped Ricotta, finished with black garlic oil.</li>\n                    <li class=\"item-option\">Smoked King Salmon & Crème Fraîche, topped with dill pollen and micro herbs.</li>\n                </ul>\n            </p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_1___}\" alt=\"\">\n            <h3>Crispy Calamari Tempura</h3>\n            <p>Delicately tempura-fried calamari, shiso leaves, and yuzu kosho aioli, finished with black sesame and chili threads.</p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_2___}\" alt=\"\">\n            <h3>Papas Rellenas</h3>\n            <p>A Cuban classic, crispy-coated potato balls filled with a savory ground beef mixture known as picadillo.</p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_3___}\" alt=\"\">\n            <h3>Grilled Guacomole and Salsa</h3>\n            <p>Crispy, house-made tortilla chips served with a perfectly grilled guacomle, infused with smoky charred flavor, and a side of our signature fire-roasted salsa.\n            Topped with a hint of sea salt and fresh lime</p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_4___}\" alt=\"\">\n            <h3>Caesar Salad</h3>\n            <p>Crisp hearts of romaine tossed in a rich, house-made dressing of egg yolk, anchovies, garlic, Dijon mustard, and Parmesan, with a hint of fresh lemon and extra virgin olive oil. \n            Topped with hand-torn croutons toasted to golden perfection and finished with shaved Parmigiano-Reggiano. A timeless classic.</p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_5___}\" alt=\"\">\n            <h3>Truffle Queso Fundido with Chorizo & Roasted Poblanos</h3>\n            <p>A blend of melted Oaxaca, Chihuahua, and Manchego cheeses, infused with white truffle essence and topped with crispy chorizo and fire-roasted poblano peppers.</p>\n        </div>\n    </div>\n\n    <div class=\"category-title\" id=\"courses\">Main Courses\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_6___}\" alt=\"\">\n            <h3>Tuna Poke with Yuzu & Avocado</h3>\n            <p>Fresh ahi tuna diced and tossed with yuzu vinaigrette, served atop a bed of creamy avocado with sesame crisps.</p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_7___}\" alt=\"\">\n            <h3>Mediterranean Spiced Lamb Chops</h3>\n            <p>Grilled lamb chops with harissa yogurt, tabbouleh, and pomegranate glaze.</p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_8___}\" alt=\"\">\n            <h3>Miso-Glazed Sea Bass</h3>\n            <p>Perfectly roasted Chilean sea bass with a miso-honey glaze, served over coconut jasmine rice and sautéed bok choy.</p>\n        </div>\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"\">\n            <h3>Butter-Poached Lobster Linguine</h3>\n            <p>Fresh lobster, tossed with garlic butter and white wine, served over linguine with cherry tomatoes and basil.</p>\n        </div>\n    </div>\n\n    <div class=\"category-title\" id=\"side\">Side Enhancements\n        <div class=\"menu-item\">\n            <img src=\"${___HTML_LOADER_IMPORT_10___}\" alt=\"\">\n            <h3>Truffle Parmesan Fries</h3>\n            <p>Crispy hand-cut fries tossed in truffle oil and Parmesan.</p>\n        </div>\n        <div class=\"menu-item\">\n            <h3>Roasted Brussels Sprouts with Maple & Bacon</h3>\n            <p>Crispy Brussels sprouts glazed with maple syrup and crisp bacon bits.</p>\n        </div>\n        <div class=\"menu-item\">\n            <h3>Grilled Asparagus with Lemon Butter</h3>\n            <p>Tender asparagus spears finished with lemon zest and garlic butter.</p>\n        </div>\n        <div class=\"menu-item\">\n            <h3>Mashed Sweet Potatoes with Brown Butter</h3>\n            <p>Velvety smooth mashed sweet potatoes topped with brown butter and sea salt.</p>\n        </div> \n    </div>  \n\n    <div class=\"category-title\" id=\"final\">Final Courses\n        <div class=\"menu-item\">\n            <h3>Crème Brûlée Trio</h3>\n            <p>A tasting of three elegant crème brûlées, each infused with a unique flavor:</p>\n                <ul>\n                    <li>Tahitian Vanilla & Bourbon</li>\n                    <li>Earl Grey & Lavender</li>\n                    <li>Pistachio & Rose</li>\n                </ul>\n        </div>\n    </div>\n</div>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://top-restaurant/./src/menu.html?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAbout)\n/* harmony export */ });\n/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.html */ \"./src/about.html\");\n\n\nfunction createAbout() {\n        const homeDiv = document.createElement('div');\n        homeDiv.classList.add('tab-content');\n        homeDiv.innerHTML = _about_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        return homeDiv;\n}      \n\n//# sourceURL=webpack://top-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.html */ \"./src/home.html\");\n\n\nfunction createHome() {\n        const homeDiv = document.createElement('div');\n        homeDiv.classList.add('tab-content');\n        homeDiv.innerHTML = _home_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        return homeDiv;\n}      \n\n//# sourceURL=webpack://top-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\n\nconst rootElement = document.getElementById('root');\n\n// Keep track of the currently displayed element\nlet currentPage = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nrootElement.appendChild(currentPage);\n\nconst menuBtn = document.getElementById('menu');\n\nmenuBtn.addEventListener('click', function () {\n    // Ensure the current page exists before removing it\n    if (currentPage) {\n        rootElement.removeChild(currentPage);\n    }\n\n    // Create and set the new page\n    currentPage = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    rootElement.appendChild(currentPage);\n});\n\nconst homeBtn = document.getElementById('home')\nhomeBtn.addEventListener('click', function () {\n    // Ensure the current page exists before removing it\n    if (currentPage) {\n        rootElement.removeChild(currentPage);\n    }\n\n    // Create and set the new page\n    currentPage = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    rootElement.appendChild(currentPage);\n});\n\nconst aboutBtn = document.getElementById('about');\naboutBtn.addEventListener('click', function() {\n    if (currentPage){\n        rootElement.removeChild(currentPage);\n\n        currentPage = (0,_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        rootElement.appendChild(currentPage);\n        }\n});\n\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.html */ \"./src/menu.html\");\n\n\nfunction createMenu() {\n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('tab-content')\n    menuDiv.innerHTML = _menu_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    return menuDiv;\n}\n\n//# sourceURL=webpack://top-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/menu-images/16983-butter-poached-lobster-with-linguine-600x600.jpg":
/*!********************************************************************************!*\
  !*** ./src/menu-images/16983-butter-poached-lobster-with-linguine-600x600.jpg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ca4db8d2f757c72ba5d.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/16983-butter-poached-lobster-with-linguine-600x600.jpg?");

/***/ }),

/***/ "./src/menu-images/Calamari.jpg":
/*!**************************************!*\
  !*** ./src/menu-images/Calamari.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1c959ab6c9d287e34a1.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/Calamari.jpg?");

/***/ }),

/***/ "./src/menu-images/Mediterranean-Grilled-Lamb-Chop-Recipe-with-Tomato-Mint-Quinoa-17.webp":
/*!************************************************************************************************!*\
  !*** ./src/menu-images/Mediterranean-Grilled-Lamb-Chop-Recipe-with-Tomato-Mint-Quinoa-17.webp ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c11c63b5a033c00160d.webp\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/Mediterranean-Grilled-Lamb-Chop-Recipe-with-Tomato-Mint-Quinoa-17.webp?");

/***/ }),

/***/ "./src/menu-images/Queso-Fundido-with-Chorizo-and-Poblanos-scaled.jpeg":
/*!*****************************************************************************!*\
  !*** ./src/menu-images/Queso-Fundido-with-Chorizo-and-Poblanos-scaled.jpeg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"511bea5de40fac128065.jpeg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/Queso-Fundido-with-Chorizo-and-Poblanos-scaled.jpeg?");

/***/ }),

/***/ "./src/menu-images/bruschetta.jpg":
/*!****************************************!*\
  !*** ./src/menu-images/bruschetta.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5dd8a9860f69cb38d0b.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/bruschetta.jpg?");

/***/ }),

/***/ "./src/menu-images/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg":
/*!*********************************************************************************************************!*\
  !*** ./src/menu-images/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4e0c4da77eaeb202e6c.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg?");

/***/ }),

/***/ "./src/menu-images/grilled-guacamole-I-howsweeteats.com-12.jpg":
/*!*********************************************************************!*\
  !*** ./src/menu-images/grilled-guacamole-I-howsweeteats.com-12.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0039e276db1d385c3df0.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/grilled-guacamole-I-howsweeteats.com-12.jpg?");

/***/ }),

/***/ "./src/menu-images/papas.jpg":
/*!***********************************!*\
  !*** ./src/menu-images/papas.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b762e23e1013afaa5c7.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/papas.jpg?");

/***/ }),

/***/ "./src/menu-images/parmesan-truffle-fries-1-Edit-683x1024.jpg":
/*!********************************************************************!*\
  !*** ./src/menu-images/parmesan-truffle-fries-1-Edit-683x1024.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9ed531b816a193ad201.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/parmesan-truffle-fries-1-Edit-683x1024.jpg?");

/***/ }),

/***/ "./src/menu-images/sea.jpg":
/*!*********************************!*\
  !*** ./src/menu-images/sea.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"438be9b5a01df066bd9e.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/sea.jpg?");

/***/ }),

/***/ "./src/menu-images/tuna.webp":
/*!***********************************!*\
  !*** ./src/menu-images/tuna.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c19b1b0d771be0e13083.webp\";\n\n//# sourceURL=webpack://top-restaurant/./src/menu-images/tuna.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;