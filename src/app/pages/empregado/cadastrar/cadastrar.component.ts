import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../../../empregado.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Empregado} from '../../../model/empregado';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  formEmpregado: FormGroup;
  submitted = false;

  constructor(
    private empregadoService: EmpregadoService,
    private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
      this.formEmpregados();
      this.onSubmit();
    }

    formEmpregados() {
        this.formEmpregado = this.formBuilder.group({
          perfil: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          email: [null, [Validators.required, Validators.email]],
          nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          sobrenome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          endereco: [null, [Validators.required, Validators.minLength(6)]],
          cidade: [null, Validators.required],
          estado: [null, Validators.required],
          cep: [null, Validators.required],
          telefone: [null, Validators.required],
          registro: [null, Validators.required],
          cpf: [null, Validators.required],
      });
    }

    get obter() {
      return this.formEmpregado.controls;
    }

    onSubmit() {
      this.empregadoService.cadastrarEmpregado(this.formEmpregado.value)
      .subscribe((resposta: Empregado) => {
        console.log('Empregado', resposta);
        this.submitted = true;
        this.formEmpregado.reset();
      });
    }
}
