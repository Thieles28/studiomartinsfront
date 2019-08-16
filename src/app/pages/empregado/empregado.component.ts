import { Router } from '@angular/router';
import { Empregado } from '../../model/empregado';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../../empregado.service';

@Component({
  selector: 'app-empregado',
  templateUrl: './empregado.component.html',
  styleUrls: ['./empregado.component.scss']
})
export class EmpregadoComponent implements OnInit {
  empregados: Observable<Empregado>;

  constructor(private empregadoService: EmpregadoService, private router: Router) { }

  ngOnInit() {
    this.carregarEmpregado();
  }

  carregarEmpregado() {
    this.empregados = this.empregadoService.listarEmpregado();
  }
}
