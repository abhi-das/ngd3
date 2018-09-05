import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpfieldComponent } from './inpfield.component';

describe('InpfieldComponent', () => {
  let component: InpfieldComponent;
  let fixture: ComponentFixture<InpfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
