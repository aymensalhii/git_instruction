import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaloonsPage } from './saloons.page';

describe('SaloonsPage', () => {
  let component: SaloonsPage;
  let fixture: ComponentFixture<SaloonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaloonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
