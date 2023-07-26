import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildAppsPage } from './build-apps.page';

describe('BuildAppsPage', () => {
  let component: BuildAppsPage;
  let fixture: ComponentFixture<BuildAppsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuildAppsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
