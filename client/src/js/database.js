import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (name, email) =>  console.log('Post to the database');

const contactDb = await openDB('contact', 1);

const tx = contactDb.transaction('contact', 'readwrite');

const store = tx.objectStore('contact');

const request = store.add({ name: name, email: email });
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');





initdb();
