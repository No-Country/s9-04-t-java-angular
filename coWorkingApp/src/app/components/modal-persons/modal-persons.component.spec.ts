import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonsComponent } from './modal-persons.component';

describe('ModalPersonsComponent', () => {
  let component: ModalPersonsComponent;
  let fixture: ComponentFixture<ModalPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPersonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
