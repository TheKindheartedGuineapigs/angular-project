import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../services/advertisements.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Advertisement } from '../../models/advertisement';
import { SearchComponent } from '../../components/shared/search/search.component';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  ads: Advertisement[];
  params: string;

  constructor(router: Router,
    private route: ActivatedRoute,
    private advertisementService: AdvertisementService) {
    if (route.queryParams) {
      route.queryParams
        .subscribe((query) => {
          this.params = query.search;
        });
    }
  }


  ngOnInit() {
    if (this.params === null) {
      this.LoadAds()
        .subscribe(result => console.log(result.json().result));
    }

    if (this.params !== null) {
      this.LoadAds()
        .subscribe(result => this.ads = result.json().result
          .filter(x => x.heading.includes(this.params)));
    }
  }


  private LoadAds() {
    return this.advertisementService.getAllAdvertisements();
  }
}
