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

	) { }

	

	ngOnInit() {
	}

}