import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminTemplateComponent } from './dashboard-admin-template.component';

describe('DashboardAdminTemplateComponent', () => {
  let component: DashboardAdminTemplateComponent;
  let fixture: ComponentFixture<DashboardAdminTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdminTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
