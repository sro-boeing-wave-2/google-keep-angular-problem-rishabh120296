import {TestBed, async, inject} from '@angular/core/testing';
import {Note} from './note';
import {NotesServiceService} from './notes-service.service';

describe('NotesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesServiceService]
    });
  });

  it('should ...', inject([NotesServiceService], (service: NotesServiceService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllNotes()', () => {

    it('should return an empty array by default', inject([NotesServiceService], (service: NotesServiceService) => {
      expect(service.getAllNotes()).toEqual([]);
    }));

    it('should return all todos', inject([NotesServiceService], (service: NotesServiceService) => {
      let note1 = new Note({title: 'Note 1', text: 'Some Text'});
      let note2 = new Note({title: 'Note 2', text: 'Some Text'});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getAllNotes()).toEqual([note1, note2]);
    }));

  });

  describe('#save(note)', () => {

    it('should automatically assign an incrementing id', inject([NotesServiceService], (service: NotesServiceService) => {
      let note1 = new Note({title: 'Note 1', text: 'Some Text'});
      let note2 = new Note({title: 'Note 2', text: 'Some Text'});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getNoteById(1)).toEqual(note1);
      expect(service.getNoteById(2)).toEqual(note2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([NotesServiceService], (service: NotesServiceService) => {
      let note1 = new Note({title: 'Note 1', text: 'Some Text'});
      let note2 = new Note({title: 'Note 2', text: 'Some Text'});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getAllNotes()).toEqual([note1, note2]);
      service.deleteNoteById(1);
      expect(service.getAllNotes()).toEqual([note2]);
      service.deleteNoteById(2);
      expect(service.getAllNotes()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([NotesServiceService], (service: NotesServiceService) => {
      let note1 = new Note({title: 'Note 1', text: 'Some Text'});
      let note2 = new Note({title: 'Note 2', text: 'Some Text'});
      service.addNote(note1);
      service.addNote(note2);
      expect(service.getAllNotes()).toEqual([note1, note2]);
      service.deleteNoteById(3);
      expect(service.getAllNotes()).toEqual([note1, note2]);
    }));

  });

  describe('#updateNoteById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([NotesServiceService], (service: NotesServiceService) => {
      let note = new Note({title: 'Note 1', text: 'Some Text'});
      service.addNote(note);
      let updatedNote = service.updateNoteById(1, {
        title: 'new title'
      });
      expect(updatedNote.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([NotesServiceService], (service: NotesServiceService) => {
      let note = new Note({title: 'Note 1', text: 'Some Text'});
      service.addNote(note);
      let updatedNote = service.updateNoteById(2, {
        title: 'new title'
      });
      expect(updatedNote).toEqual(null);
    }));

  });

});
