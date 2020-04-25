import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndexComponent } from './card-index.component';

describe('CardIndexComponent', () => {
  let component: CardIndexComponent;
  let fixture: ComponentFixture<CardIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
