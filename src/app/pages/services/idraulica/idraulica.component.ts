import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-idraulica',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './idraulica.component.html',
  styleUrl: '../services.component.scss'
})
export class IdraulicaComponent implements OnInit {
  baseImg = "/img/servizi/idraulica/service/";
  servizi: any[] = [
    {
      id : 1,
      titolo: 'Riparazioni e pronto intervento',
      descrizione: 'Interventi rapidi per perdite, guasti, allagamenti e tubazioni danneggiate.',
      img: this.baseImg + 'pronto_intervento.png',
      alt: 'Riparazioni idrauliche'
    },
    {
      id : 2,
      titolo: 'Installazioni impianti',
      descrizione: 'Installazione di impianti idraulici civili e commerciali, con materiali certificati.',
      img: this.baseImg + 'Installazioni_impianti.png',
      alt: 'Installazione impianti idraulici'
    },
    {
      id : 3,
      titolo: 'Manutenzioni programmate',
      descrizione: 'Controlli e manutenzioni periodiche per garantire efficienza e sicurezza.',
      img: this.baseImg + 'Manutenzioni_programmate.png',
      alt: 'Manutenzione impianti idraulici'
    },
    {
      id : 4,
      titolo: 'Bagni e cucine',
      descrizione: 'Realizzazione e ristrutturazione completa di bagni e cucine con opere idrauliche su misura.',
      img: this.baseImg + 'Bagni.png',
      alt: 'Ristrutturazioni idrauliche bagni e cucine'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Idraulica | Interventi rapidi e professionali');
    this.meta.updateTag({
      name: 'description',
      content:
        'Servizi idraulici per privati e aziende: pronto intervento, installazioni, manutenzioni e ristrutturazioni di bagni e cucine. Disponibilità 24/7 per urgenze.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
