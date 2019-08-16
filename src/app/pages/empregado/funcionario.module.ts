import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class FuncionarioModule { }
