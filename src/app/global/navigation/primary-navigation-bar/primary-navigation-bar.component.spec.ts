import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNavigationBarComponent } from './primary-navigation-bar.component';

describe('PrimaryNavigationBarComponent', () => {
  let component: PrimaryNavigationBarComponent;
  let fixture: ComponentFixture<PrimaryNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryNavigationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
