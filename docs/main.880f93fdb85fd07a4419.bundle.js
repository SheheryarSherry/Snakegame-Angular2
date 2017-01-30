webpackJsonp([0,3],{251:function(t,e,i){"use strict";var s=i(1);i.d(e,"a",function(){return r});var n=this&&this.__decorate||function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},r=function(){function t(){this.ngxSnake="ngx_snake"}return t.prototype.store=function(t){localStorage.setItem(this.ngxSnake,JSON.stringify({best_score:t}))},t.prototype.retrieve=function(){var t=this.parse();return t||(this.store(0),t=this.parse()),t.best_score},t.prototype.parse=function(){return JSON.parse(localStorage.getItem(this.ngxSnake))},t}();r=n([i.i(s.c)()],r)},295:function(t,e){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=295},296:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(i(395),i(373)),n=i(1),r=i(394);i.i(n.a)(),i.i(s.a)().bootstrapModule(r.a)},393:function(t,e,i){"use strict";var s=i(1),n=i(251);i.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.bestScoreService=t,this.best_score=this.bestScoreService.retrieve(),this.BOARD_SIZE=18,this.board=[],this.gameStarted=!1,this.newBestScore=!1,this.score=0,this.CONTROLS={LEFT:37,UP:38,RIGHT:39,DOWN:40},this.COLORS={GAME_OVER:"#D24D57",FRUIT:"#EC644B",HEAD:"#336E7B",BODY:"#C8F7C5",BOARD:"#86B5BD"},this.snake={direction:this.CONTROLS.LEFT,parts:[{x:-1,y:-1}]},this.fruit={x:-1,y:-1}}return t.prototype.ngOnInit=function(){this.setBoard()},t.prototype.handleAutomatically=function(){this.snake.parts[0].x==this.fruit.x&&this.snake.parts[0].y!=this.fruit.y&&this.fruit.y<=this.snake.parts[0].y&&this.snake.direction!==this.CONTROLS.DOWN?this.snake.direction=this.CONTROLS.UP:this.snake.parts[0].y==this.fruit.y&&this.snake.parts[0].x!=this.fruit.x&&this.fruit.x<=this.snake.parts[0].x&&this.snake.direction!==this.CONTROLS.RIGHT?this.snake.direction=this.CONTROLS.LEFT:this.snake.parts[0].x!=this.fruit.x&&this.snake.parts[0].y!=this.fruit.y&&this.fruit.y<=this.snake.parts[0].y&&this.snake.direction!==this.CONTROLS.DOWN?this.snake.direction=this.CONTROLS.UP:this.snake.parts[0].y!=this.fruit.y&&this.snake.parts[0].x!=this.fruit.x&&this.fruit.x<=this.snake.parts[0].x&&this.snake.direction!==this.CONTROLS.RIGHT?this.snake.direction=this.CONTROLS.LEFT:this.snake.parts[0].y==this.fruit.y&&this.snake.parts[0].x!=this.fruit.x&&this.fruit.x>=this.snake.parts[0].x&&this.snake.direction!==this.CONTROLS.LEFT?this.snake.direction=this.CONTROLS.RIGHT:this.snake.parts[0].x==this.fruit.x&&this.snake.parts[0].y!=this.fruit.y&&this.fruit.y>=this.snake.parts[0].y&&this.snake.direction!==this.CONTROLS.UP?this.snake.direction=this.CONTROLS.DOWN:this.snake.parts[0].y!=this.fruit.y&&this.snake.parts[0].x!=this.fruit.x&&this.fruit.x>=this.snake.parts[0].x&&this.snake.direction!==this.CONTROLS.LEFT?this.snake.direction=this.CONTROLS.RIGHT:this.snake.parts[0].x!=this.fruit.x&&this.snake.parts[0].y!=this.fruit.y&&this.fruit.y>=this.snake.parts[0].y&&this.snake.direction!==this.CONTROLS.UP&&(this.snake.direction=this.CONTROLS.DOWN)},t.prototype.setColors=function(t,e){return this.isGameOver?this.COLORS.GAME_OVER:this.fruit.x==e&&this.fruit.y==t?this.COLORS.FRUIT:this.snake.parts[0].x==e&&this.snake.parts[0].y==t?this.COLORS.HEAD:1==this.board[t][e]?this.COLORS.BODY:this.COLORS.BOARD},t.prototype.updatepositions=function(){var t=this.repositionHead(),e=this;if(this.boardcollision(t)||this.selfcollision(t))return this.gameover();this.fruitcollision(t)&&this.eatFruit();var i=this.snake.parts.pop();this.board[i.y][i.x]=!1,this.snake.parts.unshift(t),this.board[t.y][t.x]=!0,this.handleAutomatically(),setTimeout(function(){e.updatepositions()},this.interval)},t.prototype.repositionHead=function(){var t=Object.assign({},this.snake.parts[0]);return this.snake.direction===this.CONTROLS.LEFT?t.x-=1:this.snake.direction===this.CONTROLS.RIGHT?t.x+=1:this.snake.direction===this.CONTROLS.UP?t.y-=1:this.snake.direction===this.CONTROLS.DOWN&&(t.y+=1),t},t.prototype.boardcollision=function(t){return t.x===this.BOARD_SIZE||t.x===-1||t.y===this.BOARD_SIZE||t.y===-1},t.prototype.selfcollision=function(t){return this.board[t.y][t.x]===!0},t.prototype.fruitcollision=function(t){return t.x===this.fruit.x&&t.y===this.fruit.y},t.prototype.resetFruit=function(){var t=Math.floor(Math.random()*this.BOARD_SIZE),e=Math.floor(Math.random()*this.BOARD_SIZE);return this.board[e][t]===!0?this.resetFruit():void(this.fruit={x:t,y:e})},t.prototype.eatFruit=function(){this.score++;var t=Object.assign({},this.snake.parts[this.snake.parts.length-1]);this.snake.parts.push(t),this.resetFruit(),this.score%5==0&&(this.interval-=15)},t.prototype.gameover=function(){this.isGameOver=!0,this.gameStarted=!1;var t=this;this.score>this.best_score&&(this.bestScoreService.store(this.score),this.best_score=this.score,this.newBestScore=!0),setTimeout(function(){t.isGameOver=!1},500),this.setBoard()},t.prototype.setBoard=function(){this.board=[];for(var t=0;t<this.BOARD_SIZE;t++){this.board[t]=[];for(var e=0;e<this.BOARD_SIZE;e++)this.board[t][e]=!1}},t.prototype.newGame=function(){if(!this.gameStarted){this.newBestScore=!1,this.gameStarted=!0,this.score=0,this.tempDirection=this.CONTROLS.LEFT,this.isGameOver=!1,this.interval=150,this.snake={direction:this.CONTROLS.LEFT,parts:[]};for(var t=0;t<3;t++)this.snake.parts.push({x:10+t,y:10});this.resetFruit(),this.updatepositions()}},t}();a=r([i.i(s.Q)({selector:"ngx-snake",template:i(549),styles:[i(548)],host:{"(document:keydown)":"handleKeyboardEvents($event)"}}),o("design:paramtypes",["function"==typeof(h="undefined"!=typeof n.a&&n.a)&&h||Object])],a);var h},394:function(t,e,i){"use strict";var s=i(241),n=i(1),r=i(393),o=i(251);i.d(e,"a",function(){return h});var a=this&&this.__decorate||function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},h=function(){function t(){}return t}();h=a([i.i(n.b)({declarations:[r.a],imports:[s.a],providers:[o.a],bootstrap:[r.a]})],h)},395:function(t,e,i){"use strict";var s=i(409),n=(i.n(s),i(402)),r=(i.n(n),i(398)),o=(i.n(r),i(404)),a=(i.n(o),i(403)),h=(i.n(a),i(401)),c=(i.n(h),i(400)),p=(i.n(c),i(408)),u=(i.n(p),i(397)),f=(i.n(u),i(396)),d=(i.n(f),i(406)),l=(i.n(d),i(399)),O=(i.n(l),i(407)),y=(i.n(O),i(405)),k=(i.n(y),i(410)),x=(i.n(k),i(558));i.n(x)},548:function(t,e){t.exports=".game-header{\n  color:#fff;\n  padding:5px 15px 5px 0px;\n  position:relative;\n}\n\n.game-header>.score-block{\n  display:inline-block;\n}\n\n.score-block>.score{\n  position:absolute;\n  right:8px;\n  top:-5px;\n}\n\n.score-block>.best-score{\n  position:absolute;\n  right:8px;\n  margin-top:5px;\n  font-size:12px;\n}\n\n.game-header>.logo{\n  display:inline-block;\n  padding-left:15px;\n}\n\n.game-container{\n  width:468px;\n  display:block;\n  margin:auto;\n  background-color:#47565A;\n  box-shadow:0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n  border-radius:5px;\n}\n\n.row{\n  height:26px;\n}\n\n.column{\n  border:1px solid rgba(97, 131, 138, .1);\n  width:24px;\n  height:24px;\n  display:inline-block;\n}\n\n.start-button{\n  padding:15px;\n  text-align:center;\n  background-color:#47565A;\n  color:white;\n  border-radius:5px;\n}\n\n.start-button:hover{\n  opacity:0.5;\n  cursor:pointer;\n}\n\n.new-best-score{\n  -webkit-animation:glow .5s infinite alternate;\n          animation:glow .5s infinite alternate;\n}\n\n@-webkit-keyframes glow{\n  to{\n    text-shadow:0 0 15px #ffff00;\n  }\n}\n\n@keyframes glow{\n  to{\n    text-shadow:0 0 15px #ffff00;\n  }\n}"},549:function(t,e){t.exports='<div class="game-container">\n  <div class="game-header">\n    <h3 class="logo">Snake</h3>\n    <div class="score-block">\n      <h3 class="score" [ngClass]="{\'new-best-score\': newBestScore}">Score: {{score}}</h3>\n      <h3 class="best-score" [ngClass]="{\'new-best-score\': newBestScore}">Best Score: {{best_score}}</h3>\n    </div>\n  </div>\n  <div class="row" *ngFor="let column of board; let i = index;">\n    <div class="column" [ngStyle]="{\'background-color\': setColors(i, j)}" *ngFor="let row of column; let j = index"></div>\n  </div>\n  <div class="start-button" (click)="newGame()">Start Game</div>\n</div>'},559:function(t,e,i){t.exports=i(296)}},[559]);