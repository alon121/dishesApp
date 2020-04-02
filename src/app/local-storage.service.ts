import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  keepThisInStorage(ContentName, Content) {
    window.JSON.stringify(window.localStorage.setItem(`${ContentName}`, `${Content}`));
  }
  getThisFromStorage(ContentName) {
    window.JSON.parse(window.localStorage.getItem(`${ContentName}`));

  }
  removeThisFromStorage(ContentName) {
    window.localStorage.removeItem(`${ContentName}`);
  }

  clearEverythingInLocalStorage() {
    window.localStorage.clear();
  }
  iWantThisStorageQuerry(ContentName) {
    window.addEventListener('storage', function (e) {
      document.querySelector(`${ContentName}`).textContent = JSON.stringify(e.storageArea);
    });
  }
}
