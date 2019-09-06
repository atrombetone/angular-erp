import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivationEnd } from '@angular/router';
import { EntidadeComponent } from './../../pages/entidade/entidade/entidade.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  config: any;
s
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router) {
    this.config = { title: 'Dashboard' };

  }

  ngOnInit() {
    this.route.events.subscribe(
      event => {
        if(event instanceof ActivationEnd) {
          this.config = event.snapshot.data;
        }
      });
  }

  novoRegistro() {
    let url = this.route.url;
    switch(url) {
      case '/pessoas':
        this.route.navigate(['/new-pessoa', '0']);
        break;
    }
    console.log(this.route.url);
  }
}
