import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPostcompletoComponent } from './dialog-postcompleto.component';

describe('DialogPostcompletoComponent', () => {
  let component: DialogPostcompletoComponent;
  let fixture: ComponentFixture<DialogPostcompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPostcompletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPostcompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
