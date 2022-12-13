import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrow } from '../model/borrow';

@Injectable({providedIn : 'root'})
export class BorrowService {

  private apiServerUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  public getBorrow(): Observable<Borrow[]> {
    return this.http.get<Borrow[]>(`${this.apiServerUrl}/borrow/all`);
  }

  public borrow(borrow : Borrow): Observable<Borrow> {
    return this.http.put<Borrow>(`${this.apiServerUrl}/borrow`, borrow);
  }
  



}