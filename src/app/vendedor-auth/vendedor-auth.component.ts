import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendedorService } from '../services/vendedor.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-vendedor-auth',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './vendedor-auth.component.html',
  styleUrl: './vendedor-auth.component.scss'
})
export class VendedorAuthComponent implements OnInit{
constructor (private vendedor: VendedorService, private router:Router){}
ngOnInit(): void{

}
signUp(data: SignUp):void{
  console.warn(data)
  this.vendedor.userSignUp(data).subscribe((result)=>{
    if (result){
      this.router.navigate(['vendedor-home'])
    }

  });

}
}
