import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoPatternEditor } from './monaco-pattern-editor';

describe('MonacoPatternEditor', () => {
  let component: MonacoPatternEditor;
  let fixture: ComponentFixture<MonacoPatternEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonacoPatternEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonacoPatternEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
