import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntonioLibComponent } from './antonio-lib.component';

describe('AntonioLibComponent', () => {
  let component: AntonioLibComponent;
  let fixture: ComponentFixture<AntonioLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntonioLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntonioLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
