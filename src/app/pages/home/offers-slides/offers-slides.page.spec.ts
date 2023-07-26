import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffersSlidesPage } from './offers-slides.page';

describe('OffersSlidesPage', () => {
  let component: OffersSlidesPage;
  let fixture: ComponentFixture<OffersSlidesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OffersSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
