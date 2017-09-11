import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdvertisementService } from '../../services/advertisements.service';
import { Advertisement } from '../../models/advertisement';

@Component({
  selector: 'app-advertisement.details.component.ts',
  templateUrl: './advertisement.details.component.html',
  styleUrls: ['./advertisement.details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
  ad: Advertisement;
  id: string;
  isLoaded: boolean;
  hasPics: boolean;
  isOwner: boolean;
  private currentUser: firebase.User;

  constructor(router: Router,
    private route: ActivatedRoute,
    private advertisementService: AdvertisementService) {
    this.isLoaded = false;
    route.params
      .subscribe((query) => {
        this.id = query.id;
      });
  }

  ngOnInit() {
    this.LoadAd(this.id)
      .subscribe(result => {
        this.ad = result.json().result[0];
        this.isLoaded = true;
        if (this.ad._images.length > 0) {
          this.hasPics = true;
        }
      });
  }

  private LoadAd(id: string) {
    return this.advertisementService.findById(id);
  }
}
