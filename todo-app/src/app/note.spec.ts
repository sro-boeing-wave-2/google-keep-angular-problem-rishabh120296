import { Note } from './note';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new Note()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let note = new Note({
      title: 'Note 1',
      text: 'Some Text'
    });
    expect(note.title).toEqual('Note 1');
    expect(note.text).toEqual('Some Text');
  });
});
