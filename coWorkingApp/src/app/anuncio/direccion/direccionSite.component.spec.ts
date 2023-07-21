import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionSiteComponent } from './direccionSite.component';

describe('DireccionComponent', () => {
  let component: DireccionSiteComponent;
  let fixture: ComponentFixture<DireccionSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
