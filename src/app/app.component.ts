import { Component, OnInit } from '@angular/core';
import { BestScoreManager } from './app.storage.service'

@Component({
	selector: 'ngx-snake',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	host: {
		'(document:keydown)': 'handleKeyboardEvents($event)'
	}
})
export class AppComponent implements OnInit {
	constructor(
		private bestScoreService: BestScoreManager
	) { }
	public best_score=this.bestScoreService.retrieve();

	public BOARD_SIZE=18;
	public board =[];
	public interval:any;
	public tempDirection:any;
	public isGameOver:any;
	public gameStarted=false;
	public newBestScore=false;
	private score=0;

	public CONTROLS ={
		LEFT:37,
		UP:38,
		RIGHT: 39,
		DOWN:40

	};

	public COLORS={
		GAME_OVER:'#D24D57',
		FRUIT:'#EC644B',
		HEAD: '#336E7B',
		BODY: '#C8F7C5',
		BOARD: '#86B5BD'
	};

	private snake ={
		direction: this.CONTROLS.LEFT,
		parts:[
			{
				x:-1,
				y:-1
			}
		]
	};

	private fruit={
		x: -1,
		y:-1
	};
	

	ngOnInit() {

	}

	handleKeyboardEvents(e: KeyboardEvent){
		if(e.keyCode==this.CONTROLS.LEFT&& this.snake.direction!== this.CONTROLS.RIGHT){
			this.tempDirection=this.CONTROLS.LEFT;
		}else if (e.keyCode== this.CONTROLS.UP && this.snake.direction !== this.CONTROLS.DOWN){
			this.tempDirection= this.CONTROLS.UP;

		}else if(e.keyCode == this.CONTROLS.RIGHT && this.snake.direction !== this.CONTROLS.LEFT){
			this.tempDirection=this.CONTROLS.RIGHT;

		}else if(e.keyCode == this.CONTROLS.DOWN && this.snake.direction !== this.CONTROLS.UP){
			this.tempDirection= this.CONTROLS.DOWN;
		}
	}
	setColors(col:number,row:number): any{
		if(this.isGameOver){
			return this.COLORS.GAME_OVER;

		}else if (this.fruit.x==row && this.fruit.y == col){
			return this.COLORS.FRUIT;

		}else if(this.snake.parts[0].x == row && this.snake.parts[0].y==col){
			return this.COLORS.HEAD;

		}else if (this.board[col][row]==true){
			return this.COLORS.BODY;
		}

		return this.COLORS.BOARD;
	}
	updatepositions(): void {
		
	}
	repositionHead():any{
		let newHead=Object.assign({},this.snake.parts[0]);

		if(this.tempDirection == this.CONTROLS.LEFT){
			newHead.x -= 1;
		}else if (this.tempDirection == this.CONTROLS.RIGHT){
			newHead.x += 1;
		}else if (this.tempDirection == this.CONTROLS.UP){
			newHead.y -= 1;
		}else if (this.tempDirection == this.CONTROLS.DOWN){
			newHead.y += 1;
		}
		return newHead;
	}

	boardcollision(part: any): any{
		return part.x === this.BOARD_SIZE || part.x === -1 || part.y === this.BOARD_SIZE || part.y === -1;
	}

	selfcollision(part: any): any {
		return this.board[part.y][part.x] === true;
	}

	fruitcollision(part: any): any{
		return part.x === this.fruit.x && part.y === this.fruit.y;
	}

	resetFruit(): void{
		var x = Math.floor(Math.random() * this.BOARD_SIZE);
		var y = Math.floor(Math.random() * this.BOARD_SIZE);

		if (this.board[y][x] === true) {
			return this.resetFruit();
		}

		this.fruit={
			x: x,
			y: y,
		};
	}
	eatFruit():void {
		this.score++;

		let tail = Object.assign({},this.snake.parts[this.snake.parts.length-1]);

		this.snake.parts.push(tail);
		this.resetFruit();

		if (this.score % 5 == 0){
			this.interval -= 15;
		}
	}

}