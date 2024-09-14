import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:5000/api/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTransaction(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }
}
