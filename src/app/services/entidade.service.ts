import { Injectable } from '@angular/core';
import { EntidadeModel, EstadoModel, ViaCepModel } from '../models/models-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {
  resourceBase = 'pessoa';

  getHeader() {
    const httpOptions = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'

      })
    };

    return httpOptions;
  }

  constructor(private http: HttpClient) { }

  getPessoasList() {
      return this.http.get(environment.apiUrl + this.resourceBase);
  }

  salvarPessoa(pessoa: EntidadeModel): Observable<EntidadeModel> {
    return this.http.post<EntidadeModel>(environment.apiUrl + this.resourceBase, pessoa, this.getHeader());
  }

   getPessoa(id: any): Observable<EntidadeModel> {
     return this.http.get<EntidadeModel>(environment.apiUrl + this.resourceBase + '/' + id);
  }

  buscarEndereco(nuCep: string): Observable<ViaCepModel> {
    let cep = nuCep.replace('-', '');
    let url =  'https://viacep.com.br/ws/XXXX/json/'.replace('XXXX', cep);
    return this.http.get<ViaCepModel>(url);
  }

  removePessoa(id: any): Observable<any> {
    return this.http.delete(environment.apiUrl + this.resourceBase + '/' + id);
  }
}
