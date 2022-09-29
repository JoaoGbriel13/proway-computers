import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule} from 'ngx-mask'

const routes: Routes = [
  { path: '', component: ContatoComponent }
];

@NgModule({
  declarations: [
    ContatoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class ContatoModule { }
