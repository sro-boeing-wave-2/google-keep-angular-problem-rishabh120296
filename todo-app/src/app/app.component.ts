import { Component, OnInit } from '@angular/core';
import {Note} from './note';
import { NotesServiceService } from './notes-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesServiceService]
})
export class AppComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesServiceService: NotesServiceService) {
  }

  public ngOnInit() {
    this.notesServiceService
      .getAllNotes()
      .subscribe(
        (notes) => {
          this.notes = notes;
        }
      );
  }

  onAddNote(note) {
    this.notesServiceService
      .addNote(note)
      .subscribe(
        (newNote) => {
          this.notes = this.notes.concat(newNote);
        }
      );
  }

  onToggleNoteIsPinned(note) {
    this.notesServiceService
      .toggleIsPinned(note)
      .subscribe(
        (updatedNote) => {
          note = updatedNote;
        }
      );
  }

  onRemoveNote(note) {
    this.notesServiceService
      .deleteNoteById(note.id)
      .subscribe(
        (_) => {
          this.notes = this.notes.filter((t) => t.id !== note.id);
        }
      );
  }
}
