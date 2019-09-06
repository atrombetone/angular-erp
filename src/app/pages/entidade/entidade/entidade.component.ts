import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadeService } from 'src/app/services/entidade.service';
import { Data } from 'src/app/services/data';
import { EntidadeModel, EstadoModel } from './../../../models/models-type';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-entidade',
  templateUrl: './entidade.component.html',
  styleUrls: ['./entidade.component.css']
})
export class EntidadeComponent implements OnInit {

  subscription: Subscription;
  entidadeModel: EntidadeModel;
  estados: any;
  tpEntidade   = new FormControl();
  tiposEntidade: string[] = ['Cliente', 'Fornecedor', 'Vendedor'];
  tpfj = [{value: 0, label: 'Física'}, {value: 1, label: 'Jurídica'}];
  selecao: any;

  entidadeForm = this.fb.group({
    idEmpresa: null,
    id: null,
    nmRazaoSocial:  null,
    nmFantasia:  null,
    nuCep: null,
    dsLogradouro:  null,
    nuLogradouro: null,
    dsComplemento: null,
    nmBairro: null,
    sgUf: null,
    nmCidade: null,
    idCidade: null,
    nuFone:  null,
    dsEmail:  null,
    nuCpfCnpj:  null,
    nuRgIe:  null,
    clPessoa:  null,
    tpPessoa: null,
    dsHomePage:  null,
    dsObservacao:  null
  });

  constructor(private activateRoute: ActivatedRoute, private snackBar: MatSnackBar,
     private route: Router, private fb: FormBuilder, private service: EntidadeService, private data: Data) {
  }

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(value => {
       this.carregarEntidade(value['id']);
    });
  }

  carregarEntidade(id) {
    this.service.getPessoa(id).subscribe(
      data => {
        this.entidadeForm.controls['idEmpresa'].setValue(data.idEmpresa);
        this.entidadeForm.controls['id'].setValue(data.id);
        this.entidadeForm.controls['nmRazaoSocial'].setValue(data.nmRazaoSocial);
        this.entidadeForm.controls['nmFantasia'].setValue(data.nmFantasia);
        this.entidadeForm.controls['nuCep'].setValue(data.nuCep);
        this.entidadeForm.controls['dsLogradouro'].setValue(data.dsLogradouro);
        this.entidadeForm.controls['nuLogradouro'].setValue(data.nuLogradouro);
        this.entidadeForm.controls['dsComplemento'].setValue(data.dsComplemento);
        this.entidadeForm.controls['nmBairro'].setValue(data.nmBairro);
        this.entidadeForm.controls['sgUf'].setValue(data.sgUf);
        this.entidadeForm.controls['nmCidade'].setValue(data.nmCidade);
        this.entidadeForm.controls['idCidade'].setValue(data.idCidade);
        this.entidadeForm.controls['nuFone'].setValue(data.nuFone);
        this.entidadeForm.controls['dsEmail'].setValue(data.dsEMail);
        this.entidadeForm.controls['nuCpfCnpj'].setValue(data.nuCpfCnpj);
        this.entidadeForm.controls['nuRgIe'].setValue(data.nuRgIe);
        this.entidadeForm.controls['clPessoa'].setValue(data.clPessoa);
        debugger;
        this.entidadeForm.controls['tpPessoa'].setValue(data.tpPessoa);
        this.entidadeForm.controls['dsHomePage'].setValue(data.dsHome);
        this.entidadeForm.controls['dsObservacao'].setValue(data.dsObservacao);
      }
    );
  }

  voltar() {
    this.route.navigate(['pessoas']);
  }

  onSubmit() {
    console.log(this.entidadeForm.value);
    this.service.salvarPessoa(this.entidadeForm.value).subscribe(
      data => {
        this.snackBar.open('Registro salvo com sucesso', '', {
          duration: 3000
        });
        this.route.navigate(['pessoas']);
      },
      error => {
        this.snackBar.open(JSON.stringify(error));
      });
  }

  buscarPorCep() {
    let nuCep = this.entidadeForm.controls['nuCep'].value;
    this.service.buscarEndereco(nuCep).subscribe(
       data =>  {
          this.entidadeForm.controls['dsLogradouro'].setValue(data.logradouro);
          this.entidadeForm.controls['nuLogradouro'].setValue('');
          this.entidadeForm.controls['dsComplemento'].setValue(data.complemento);
          this.entidadeForm.controls['nmBairro'].setValue(data.bairro);
          this.entidadeForm.controls['sgUf'].setValue(data.uf);
          this.entidadeForm.controls['nmCidade'].setValue(data.localidade);
          this.entidadeForm.controls['idCidade'].setValue(data.ibge);
       },
       error => {
         this.snackBar.open(JSON.stringify(error));
      }
    );
  }
}


