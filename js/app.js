


class Furry {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }
}

class Coin {
    constructor(){
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}

class Game {
    constructor(){
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry;
        this.coin = new Coin;
        this.score = 0;
        this.index = function (x, y) {
            return x + (y * 10);
        const self = this;    
        }    
    }
    gameOver(){
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idInterval);
            alert(`KONIEC GRY Twoja ilosc punktów to ${this.score}`);
            this.hideVisibleFurry();
            
        return true;
        }
    }
    checkCoinCollision(){
        // console.log(`furry x = ${this.furry.x} y = ${this.furry.y} coin x = ${this.coin.x} y = ${this.coin.y}`);

        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
            this.score ++;
            let scoreStrong = document.querySelector("#score strong");
            scoreStrong.innerText = this.score;
            let newCoin = new Coin;
            this.coin = newCoin;
            this.showCoin();

        }
    }
    showFurry(){ 
        // if (this.furry.y >= 0 && this.furry.y <=9) {
            
        // }
        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    }
    hideVisibleFurry(){
        const visibleFurry = document.querySelector(".furry");
        visibleFurry && visibleFurry.classList.remove("furry");
    }
    showCoin(){
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    }
    
    moveFurry(){
        console.log(`x = ${this.furry.x}`);
        console.log(`y = ${this.furry.y}`);
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
    turnFurry(event){
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
    startGame(){
        this.idInterval = setInterval(() => {
            this.moveFurry();            
        }, 250);
    }
}
const game = new Game;

game.showFurry();
game.showCoin();
game.startGame();

 

    document.addEventListener('keydown', function(event) {
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
