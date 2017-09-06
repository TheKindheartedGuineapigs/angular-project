/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Create.advertismentComponent } from './create.advertisment.component';

describe('Create.advertismentComponent', () => {
  let component: Create.advertismentComponent;
  let fixture: ComponentFixture<Create.advertismentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create.advertismentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create.advertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
