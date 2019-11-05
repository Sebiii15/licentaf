import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLabItemComponent } from './student-lab-item.component';

describe('StudentLabItemComponent', () => {
  let component: StudentLabItemComponent;
  let fixture: ComponentFixture<StudentLabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
