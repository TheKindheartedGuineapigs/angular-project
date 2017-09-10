import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAdvertisementComponent } from './current-advertisement.component';

describe('CurrentAdvertisementComponent', () => {
  let component: CurrentAdvertisementComponent;
  let fixture: ComponentFixture<CurrentAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
