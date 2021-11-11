import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameDirective } from './frame.directive';

@Component({})
class TestComponent {}

describe('FrameDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  const elementRefMock = {};

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FrameDirective, TestComponent],
      providers: [
        {provide: ElementRef, useValue: elementRefMock}
      ]
    }).createComponent(TestComponent);
  })

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
