import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRenderingChild } from './list-rendering-child';

describe('ListRenderingChild', () => {
  let component: ListRenderingChild;
  let fixture: ComponentFixture<ListRenderingChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRenderingChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRenderingChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
