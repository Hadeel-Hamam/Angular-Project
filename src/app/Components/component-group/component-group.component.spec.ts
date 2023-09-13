import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGroupComponent } from './component-group.component';

describe('ComponentGroupComponent', () => {
  let component: ComponentGroupComponent;
  let fixture: ComponentFixture<ComponentGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentGroupComponent]
    });
    fixture = TestBed.createComponent(ComponentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
