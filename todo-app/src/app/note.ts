export class Note {
  id: number;
  title: string;
  text: string;
  isPinned: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
