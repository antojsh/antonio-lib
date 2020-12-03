import { BtnAntonioDirective } from './btn-antonio.directive';
import { TestBed } from '@angular/core/testing';

describe('BtnAntonioDirective', () => {
  it('should create an instance', () => {
    const directive = TestBed.inject(BtnAntonioDirective);
    expect(directive).toBeTruthy();
  });
});
