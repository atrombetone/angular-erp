import { Component, OnInit, Output } from '@angular/core';
import { EntidadeService } from 'src/app/services/entidade.service';
import { EntidadeModel } from './../../../models/models-type';
import { MatTabChangeEvent } from '@angular/material';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-entidade-list',
  templateUrl: './entidade-list.component.html',
  styleUrls: ['./entidade-list.component.css']
})
export class EntidadeListComponent implements OnInit {

  clientes: EntidadeModel;
  fornecedores: EntidadeModel;
  vendedores: EntidadeModel;
  isLoading: boolean;

 // @Output() novaEntidade = new EventEmitter();

  constructor(private service: EntidadeService) { }

  ngOnInit() {
    this.isLoading = true;
    this.carregarRegistros();
  }

  carregarRegistros() {
    this.service.getPessoasList().subscribe((data: any) => {
      this.clientes = data[0];
      this.fornecedores = data[1];
      this.vendedores = data[2];
      this.isLoading = false;
    });
  }

}
