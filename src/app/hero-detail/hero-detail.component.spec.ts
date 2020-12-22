import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoDetailComponent } from './hero-detail.component';

describe('HeoDetailComponent', () => {
  let component: HeoDetailComponent;
  let fixture: ComponentFixture<HeoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
