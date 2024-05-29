import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendedorAuthComponent } from './vendedor-auth/vendedor-auth.component';
import { NgModule } from '@angular/core';
import { VendedorHomeComponent } from './vendedor-home/vendedor-home.component';


export const routes: Routes = [
{
    component: HomeComponent,
    path: '',
    
},
{
    component: VendedorAuthComponent,
    path: 'vendedor-auth',
    
},
{
    component: VendedorHomeComponent,
    path: 'vendedor-home',
    
}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}