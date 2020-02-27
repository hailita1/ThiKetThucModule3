import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListReadComponent } from './book-list-read.component';

describe('BookListReadComponent', () => {
  let component: BookListReadComponent;
  let fixture: ComponentFixture<BookListReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
