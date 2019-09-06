import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/services/data';
import { EntidadeService } from './../../services/entidade.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrls: ['./list-itens.component.css']
})
export class ListItensComponent implements OnInit {

  @Input() dataList: any;
  @Output() carregarRegistros = new EventEmitter();

  constructor(private route: Router, private data: Data, private service: EntidadeService,
     private snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  editarcadastro(obj) {
    console.log(obj);
    this.data.storage = obj;
    this.route.navigate(['/edit-pessoa', obj.id]);
  }

  removerPessoa(id) {
    this.service.removePessoa(id).subscribe(
      data => {
        this.snackBar.open('Operação realizada com sucesso.', '', {duration: 3000});
        this.carregarRegistros.emit();
    },
      error => this.snackBar.open(error, '', {duration: 3000}));
  }

}
