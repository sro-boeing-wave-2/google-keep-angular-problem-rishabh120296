import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllNotes(): Observable<Note[]> {
    return of([
      new Note({id: 1, title: 'Read article', text: 'Some Text', isPinned: false})
    ]);
  }

  public createNote(note: Note): Observable<Note> {
    return of(
      new Note({id: 1, title: 'Read article', text: 'Some Text', isPinned: false})
    );
  }

  public getNoteById(noteId: number): Observable<Note> {
    return of(
      new Note({id: 1, title: 'Read article', text: 'Some Text', isPinned: false})
    );
  }

  public updateNote(note: Note): Observable<Note> {
    return of(
      new Note({id: 1, title: 'Read article', text: 'Some Text', isPinned: false})
    );
  }

  public deleteNoteById(noteId: number): Observable<null> {
    return null;
  }
}
