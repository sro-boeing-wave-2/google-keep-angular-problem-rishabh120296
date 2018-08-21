import { Component } from '@angular/core';
import {Note} from './note';
import { NotesServiceService } from './notes-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  newNote: Note = new Note();

  constructor(private notesServiceService: NotesServiceService) {
  }

  onAddNote(note: Note) {
    this.notesServiceService.addNote(note);
  }

  onToggleIsPinned(note) {
    this.notesServiceService.toggleIsPinned(note);
  }

  onRemoveNote(note) {
    this.notesServiceService.deleteNoteById(note.id);
  }

  get notes() {
    return this.notesServiceService.getAllNotes();
  }
}
