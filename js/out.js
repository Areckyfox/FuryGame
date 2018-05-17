/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Furry = function Furry() {
    _classCallCheck(this, Furry);

    this.x = 0;
    this.y = 0;
    this.direction = "right";
};

var Coin = function Coin() {
    _classCallCheck(this, Coin);

    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.index = function (x, y) {
            return x + y * 10;
            var self = this;
        };
    }

    _createClass(Game, [{
        key: "gameOver",
        value: function gameOver() {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
                clearInterval(this.idInterval);
                alert("KONIEC GRY Twoja ilosc punkt\xF3w to " + this.score);
                this.hideVisibleFurry();

                return true;
            }
        }
    }, {
        key: "checkCoinCollision",
        value: function checkCoinCollision() {
            // console.log(`furry x = ${this.furry.x} y = ${this.furry.y} coin x = ${this.coin.x} y = ${this.coin.y}`);

            if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
                this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
                this.score++;
                var scoreStrong = document.querySelector("#score strong");
                scoreStrong.innerText = this.score;
                var newCoin = new Coin();
                this.coin = newCoin;
                this.showCoin();
            }
        }
    }, {
        key: "showFurry",
        value: function showFurry() {
            // if (this.furry.y >= 0 && this.furry.y <=9) {

            // }
            this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
        }
    }, {
        key: "hideVisibleFurry",
        value: function hideVisibleFurry() {
            var visibleFurry = document.querySelector(".furry");
            visibleFurry && visibleFurry.classList.remove("furry");
        }
    }, {
        key: "showCoin",
        value: function showCoin() {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
        }
    }, {
        key: "moveFurry",
        value: function moveFurry() {
            console.log("x = " + this.furry.x);
            console.log("y = " + this.furry.y);
            this.hideVisibleFurry();
            if (this.furry.direction === "right") {
                this.furry.x++;
            } else if (this.furry.direction === "left") {
                this.furry.x--;
            } else if (this.furry.direction === "down") {
                this.furry.y++;
            } else if (this.furry.direction === "up") {
                this.furry.y--;
            }
            this.gameOver();
            if (this.gameOver() != true) {
                this.checkCoinCollision();
                this.showFurry();
            }
            // this.showFurry();    
            // this.checkCoinCollision();
        }
    }, {
        key: "turnFurry",
        value: function turnFurry(event) {
            switch (event.which) {
                case 37:
                    this.furry.direction = "left";
                    break;
                case 39:
                    this.furry.direction = "right";
                    break;
                case 38:
                    this.furry.direction = "up";
                    break;
                case 40:
                    this.furry.direction = "down";
                    break;
            }
        }
    }, {
        key: "startGame",
        value: function startGame() {
            var _this = this;

            this.idInterval = setInterval(function () {
                _this.moveFurry();
            }, 250);
        }
    }]);

    return Game;
}();

var game = new Game();

game.showFurry();
game.showCoin();
game.startGame();

document.addEventListener('keydown', function (event) {
    game.turnFurry(event);
    // console.log(event.which);
});

// function Furry() {
//     this.x = 0;
//     this.y = 0;
//     this.direction = "right";
// }
// function Coin() {
//     this.x = Math.floor(Math.random() * 10) ;
//     this.y = Math.floor(Math.random() * 10) ;
// } 

// function Game(){
//     this.board = document.querySelectorAll("#board div");
//     this.furry = new Furry();
//     this.coin = new Coin();
//     this.score = 0;
//     this.index = function(x,y) {
//         return x + (y * 10);
//     }
//     this.showFurry = function() {this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
//     }
//     this.showCoin = function() {this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
//     } 
//     turnFurry(event)=> {
//             switch (event.which) {
//                 case 37:
//                 this.furry.direction = "left";
//                 break;  
//             case 38:  
//                 this.furry.direction = "right";  
//                break;
//             case 39: 
//                 this.furry.direction = "up"; 
//                 break;              
//             case 40:
//                 this.furry.direction = "down";
//                 break;
//             }   
//     }
//     this.hideVisibleFurry = ()=>{
//         let classFurry = document.querySelectorAll(".furry");
//         for (let i = 0; i < classFurry.length; i++) {
//             classFurry[i].classList.remove("furry");

//         }        

//     }
//     const self = this;
//     this.moveFury = () => {
//         this.hideVisibleFurry();
//         this.turnFurry();
//         if (this.furry.direction === "right") {
//         this.furry.x= this.furry.x + 1;
//         this.showFurry();    
//             console.log(this.furry.x);
//             console.log(this.furry.y);

//         }
//         if (this.furry.direction === "left") {
//         this.furry.x= this.furry.x - 1;
//         this.showFurry();        
//             console.log(this.furry.x);
//             console.log(this.furry.y);
//         }
//         if (this.furry.direction === "up") {
//         this.furry.y= this.furry.y - 1;
//         this.showFurry();        
//             console.log(this.furry.x);
//             console.log(this.furry.y);
//         }
//         if (this.furry.direction === "down") {
//         this.furry.y= this.furry.y + 1;
//         this.showFurry();        
//             console.log(this.furry.x);
//             console.log(this.furry.y);
//         }
//     }
//     this.startGame = function(){setInterval(() => {self.moveFury()}, 650); }
// }

// let newGame = new Game();
// console.log(newGame.coin);
// console.log(newGame.furry);
// newGame.startGame();

// newGame.showCoin();   

// document.addEventListener('keydown', function (event) {
//     Game.turnFurry(event);
// });

/***/ })
/******/ ]);