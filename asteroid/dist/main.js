/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction Asteroid(pos){\n  this.color = '#FFC0CB';\n  this.radius = 20;\n  this.pos = pos;\n  this.vel = Util.randomVec(10);\n}\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack://asteroid/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\nfunction Game(){\n  this.asteroids = [];\n  this.create();\n}\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.create = function(){\n  while (this.asteroids.length < Game.NUM_ASTEROIDS){\n    this.addAsteroids();\n  }\n}\n\nGame.prototype.addAsteroids = function(){\n  const ast = new Asteroid(this.randomPosition())\n  this.asteroids.push(ast);\n}\n\nGame.prototype.randomPosition = function(){\n  let x = Math.floor(Math.random() * (Game.DIM_X + 1));\n  let y = Math.floor(Math.random() * (Game.DIM_Y + 1));\n  return [x,y]\n}\n\nGame.prototype.draw = function(ctx){\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.asteroids.forEach((el) =>{\n    el.draw(ctx);\n  });\n  ctx.fillRect(0, 0, Game.DIM_X, Game.Dim_Y);\n\n}\n\nGame.prototype.moveObjects = function() {\n  this.asteroids.forEach((el) => {\n    el.move();\n  });\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroid/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.drawingContext = ctx;\n}\n\nGameView.prototype.start = function() {\n    setInterval(()=> {\n        this.game.moveObjects();\n        this.game.draw(this.drawingContext);\n    }, 20);\n    \n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroid/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\nwindow.Asteroid = Asteroid;\n\n\nconst mo = new MovingObject({\n  pos: [200, 200],\n  vel: [10, 10],\n  radius: 10,\n  color: \"#00FF00\"\n});\n\nconst a = new Asteroid ([10,10])\n\nconst game = new Game()\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function(){\n  const canvas = document.getElementById(\"game-canvas\");\n  canvas.width = Game.DIM_X;\n  canvas.height = Game.DIM_Y;\n  const canvasContext = canvas.getContext(\"2d\");\n  const gameview = new GameView(canvasContext)\n  gameview.start();\n})\n\n\n//# sourceURL=webpack://asteroid/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2, true);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0]\n    this.pos[1] += this.vel[1]\n};\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroid/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("\n\nconst Util ={\n   inherits(childClass, ParentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = ParentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    \n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://asteroid/./src/utils.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;