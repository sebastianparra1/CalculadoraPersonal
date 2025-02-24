import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CALCULADORAPage } from './calculadora.page';

describe('CALCULADORAPage', () => {
  let component: CALCULADORAPage;
  let fixture: ComponentFixture<CALCULADORAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CALCULADORAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
