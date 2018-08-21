import { Injectable } from '@angular/core';
import {Note} from './note';
import { ApiService } from './api.service';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class NotesServiceService {

  constructor(private api: ApiService) { }

  // Simulate POST /notes

addNote(note: Note): Observable<Note> {

  return this.api.createNote(note);
}

// Simulate DELETE /notes/:id
deleteNoteById(noteId: number): Observable<Note> {

  return this.api.deleteNoteById(noteId);
}

// Simulate PUT /notes/:id
updateNoteById(note: Note): Observable<Note> {

  return this.api.updateNote(note);
}

// Simulate GET /notes
getAllNotes(): Observable<Note[]> {
  return this.api.getAllNotes();
}

// Simulate GET /notes/:id
getNoteById(noteId: number): Observable<Note> {
  return this.api.getNoteById(noteId);
}

toggleIsPinned(note: Note){
  note.isPinned = !note.isPinned;
  return this.api.updateNote(note);
}

}

