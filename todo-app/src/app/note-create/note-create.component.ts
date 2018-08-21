import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  newNote: Note = new Note();

  @Output()
  add: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  addNote(){
    this.add.emit(this.newNote);
    this.newNote = new Note();
  }

  ngOnInit() {
  }

}
