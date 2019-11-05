import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLabListEditComponent } from './subject-lab-list-edit.component';

describe('SubjectLabListEditComponent', () => {
  let component: SubjectLabListEditComponent;
  let fixture: ComponentFixture<SubjectLabListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectLabListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLabListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
