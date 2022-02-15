// eslint-disable-next-line import/no-cycle

import Navigator from './navigation.js';

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export const nav1 = new Navigator();