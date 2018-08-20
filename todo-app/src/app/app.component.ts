import { Component } from '@angular/core';
import {Note} from './note';
import { NotesServiceService } from './notes-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesServiceService]
})
export class AppComponent {
  newNote: Note = new Note();

  constructor(private notesServiceService: NotesServiceService) {
  }

  addNote() {
    this.notesServiceService.addNote(this.newNote);
    this.newNote = new Note();
  }

  toggleIsPinned(note) {
    this.notesServiceService.toggleIsPinned(note);
  }

  removeNote(note) {
    this.notesServiceService.deleteNoteById(note.id);
  }

  get notes() {
    return this.notesServiceService.getAllNotes();
  }
}
