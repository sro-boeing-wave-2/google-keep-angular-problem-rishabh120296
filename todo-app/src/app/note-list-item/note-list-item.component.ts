import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { MatDialog } from '../../../node_modules/@angular/material/dialog';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent {

  edit: boolean = true;

  @Input() note: Note;

  @Output()
  remove: EventEmitter<Note> = new EventEmitter();

  @Output()
  toggleIsPinned: EventEmitter<Note> = new EventEmitter();

  @Output()
  update: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  toggleNoteIsPinned(note: Note) {
    this.toggleIsPinned.emit(note);
    console.log("State of Note in Item component", note);
  }

  removeNote(note: Note) {
    this.remove.emit(note);
  }

  toggleEdit(edit: boolean) {
    this.edit = !this.edit;
  }

  updateNote(note: Note) {
    this.edit = !this.edit;
    this.update.emit(note);
  }
}
