
import { Injectable } from '@angular/core';
import { Contatos } from '../interfaces/Contatos';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private apiUrl = "http://localhost:3000/contatos"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contatos[]> {
    return this.http.get<Contatos[]>(this.apiUrl)
  }

  jaExiste(numero: string): Observable<Contatos[]> {
    return this.http.get<Contatos[]>(`${this.apiUrl}?numero=${numero}`);
  }

  postItem(nome: string, numero: string): Observable<Contatos> {
    const novoContato: Contatos = { nome, numero };
    return this.http.post<Contatos>(this.apiUrl, novoContato);
  }

  deleteItem(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
