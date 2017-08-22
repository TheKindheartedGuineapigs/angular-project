import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  text: string;

  constructor(router: Router, route: ActivatedRoute) {
    route.queryParams
      .subscribe((params) => {
        this.text = `Searching for advertisements with query "${params.search}".
        Remove DummyComponent once searching of advertisements is implemented.`;
      });
  }

  ngOnInit() {
  }

}
