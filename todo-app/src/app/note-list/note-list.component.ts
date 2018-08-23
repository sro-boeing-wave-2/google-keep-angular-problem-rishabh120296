import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input()
  notes: Note[];

  @Output()
  remove: EventEmitter<Note> = new EventEmitter();

  @Output()
  update: EventEmitter<Note> = new EventEmitter();

  @Output()
  toggleIsPinned: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  onToggleIsPinned(note: Note) {
    this.toggleIsPinned.emit(note);
  }

  onRemoveNote(note: Note) {
    this.remove.emit(note);
  }

  onUpdateNote(note: Note) {
    this.update.emit(note);
  }

  ngOnInit() {
  }

}
