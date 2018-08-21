import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Note } from './note';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable()

export class ApiService {

  constructor(private http: Http) { }

   // API: GET /todos
   public getAllNotes(): Observable<Note[]> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/Notes')
    .pipe(map(response => {
      const notes = response.json();
      return notes.map((todo) => new Note(todo));
    }))
    .pipe(catchError(this.handleError));
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
  // API: POST /todos
  public createNote(note: Note): Observable<Note> {
    // will use this.http.post()
    return this.http
    .post(API_URL + '/Notes', note)
    .pipe(map(response => {
      return new Note(response.json());
    }))
    .pipe(catchError(this.handleError));
  }

  // API: GET /todos/:id
  public getNoteById(noteId: number): Observable<Note> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/Notes/' + noteId)
    .pipe(map(response => {
      return new Note(response.json());
    }))
    .pipe(catchError(this.handleError));
  }

  // API: PUT /todos/:id
  public updateNote(note: Note): Observable<Note> {
    // will use this.http.put()
    return this.http
    .put(API_URL + '/Notes/' + note.id, note)
    .pipe(map(response => {
      return new Note(response.json());
    }))
    .pipe(catchError(this.handleError));
  }

  // DELETE /todos/:id
  public deleteNoteById(noteId: number): Observable<null> {
    // will use this.http.delete()
    return this.http
    .delete(API_URL + '/Notes/' + noteId)
    .pipe(map(response => null))
    .pipe(catchError(this.handleError));
  }
}

