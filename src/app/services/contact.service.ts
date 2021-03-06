import { Contact } from './../interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  create(body: Contact) {
    return this.http.post('https://admin.primemart.co/items/contacts', body);
  }
}
