import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerNavComponent } from './owner-nav.component';

describe('OwnerNavComponent', () => {
  let component: OwnerNavComponent;
  let fixture: ComponentFixture<OwnerNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerNavComponent]
    });
    fixture = TestBed.createComponent(OwnerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
