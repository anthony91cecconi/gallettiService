import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-are',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './are.component.html',
  styleUrl: './are.component.scss'
})
export class AreComponent {
  staf : Staf[] =[
    {
      name : "Davide Galletti",
      content : "testo di prova per Davide"
    },
      {
      name : "Simone Galletti",
      content : "testo di prova per Simone"
    },
        {
      name : "Alfredo Galletti",
      content : "testo di prova per Alfredo"
    }
  ]
  select : number = 0;
  person : Staf = this.staf[0];

  next(){
    if(this.select < this.staf.length -1){
      this.select++
    }else{
      this.select = 0;
    }

    this.person = this.staf[this.select];
  }

  back(){
    if(this.select > 0){
      this.select--
    }else{
      this.select = this.staf.length -1;
    }

    this.person = this.staf[this.select];
  }

}

export interface Staf{
  name : string;
  content : string;
}
