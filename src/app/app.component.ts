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

}