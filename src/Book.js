import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */
export function Book(title, year, publicationBy, authors) {
    this.title = title;
    this.year = year;
    this.publicationBy = publicationBy;
    this.authors = authors;
    this.likedUsers = [];

    this.publicationBy.myBooks.push(this);
}
