import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSelectComponent } from './parent-select.component';

describe('ParentSelectComponent', () => {
  let component: ParentSelectComponent;
  let fixture: ComponentFixture<ParentSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentSelectComponent]
    });
    fixture = TestBed.createComponent(ParentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
