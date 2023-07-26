import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurAppsPage } from './our-apps.page';

describe('OurAppsPage', () => {
  let component: OurAppsPage;
  let fixture: ComponentFixture<OurAppsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OurAppsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
