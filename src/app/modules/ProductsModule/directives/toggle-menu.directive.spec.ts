import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleMenuDirective } from './toggle-menu.directive';

@Component({})
class TestComponent {}

describe('ToggleMenuDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  const elementRefMock = {};

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ToggleMenuDirective, TestComponent],
      providers: [
        {provide: ElementRef, useValue: elementRefMock}
      ]
    }).createComponent(TestComponent);
  })

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
