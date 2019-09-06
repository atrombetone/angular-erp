import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule,
  MatRadioModule, MatTabsModule, MatProgressSpinnerModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { Data } from './services/data';

import { EntidadeListComponent } from './pages/entidade/entidade-list/entidade-list.component';
import { HomeComponent } from './pages/home/home.component';
import { EntidadeComponent } from './pages/entidade/entidade/entidade.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListItensComponent } from './components/list-itens/list-itens.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProdutoListComponent } from './pages/produto/produto-list/produto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntidadeListComponent,
    HomeComponent,
    EntidadeComponent,
    ListItensComponent,
    EnderecoComponent,
    ContactComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [ Data ],
  bootstrap: [AppComponent]
})
export class AppModule { }
