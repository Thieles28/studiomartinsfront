import { Empregado } from './model/empregado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

private baseUrl = 'http://localhost:8080/api/empregado';

constructor(private http: HttpClient) { }

  listarEmpregado(): Observable<Empregado> {
    return this.http.get<Empregado>(`${this.baseUrl}`);
  }

  cadastrarEmpregado(empregado: Empregado): Observable<Empregado> {
    return this.http.post<Empregado>(`${this.baseUrl}/cadastrar`, empregado);
  }
}
