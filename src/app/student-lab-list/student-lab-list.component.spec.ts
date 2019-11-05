import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLabListComponent } from './student-lab-list.component';

describe('StudentLabListComponent', () => {
  let component: StudentLabListComponent;
  let fixture: ComponentFixture<StudentLabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
