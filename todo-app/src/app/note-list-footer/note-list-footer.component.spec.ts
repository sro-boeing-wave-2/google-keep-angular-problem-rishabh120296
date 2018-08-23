import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteListFooterComponent } from './note-list-footer.component';
import { Note } from '../note';

describe('NoteListFooterComponent', () => {
  let component: NoteListFooterComponent;
  let fixture: ComponentFixture<NoteListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListFooterComponent);
    component = fixture.componentInstance;
    component.notes = [
      new Note({ id: 1, title: 'Test', text: 'Test' , isPinned: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
