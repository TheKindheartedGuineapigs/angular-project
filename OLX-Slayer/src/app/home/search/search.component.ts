import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchParameter: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(ev) {
	console.log(this.searchParameter);
	this.router.navigate([`/advertisements`], { queryParams: {
		search: this.searchParameter,
	}});
  }

}
