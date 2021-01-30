import { Empregado } from './model/empregado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

private baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

  listarEmpregado(): Observable<Empregado> {
    return this.http.get<Empregado>(`${this.baseUrl}`);
  }

  cadastrarEmpregado(empregado: Empregado): Observable<Empregado> {
    return this.http.post<Empregado>(`${this.baseUrl}/cadastrar`, empregado);
  }
}
