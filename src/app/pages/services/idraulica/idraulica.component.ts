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
  servizi: any[] = [
    {
      titolo: 'Riparazioni e pronto intervento',
      descrizione: 'Interventi rapidi per perdite, guasti, allagamenti e tubazioni danneggiate.',
      img: 'https://picsum.photos/640/400',
      alt: 'Riparazioni idrauliche'
    },
    {
      titolo: 'Installazioni impianti',
      descrizione: 'Installazione di impianti idraulici civili e commerciali, con materiali certificati.',
      img: 'https://picsum.photos/640/400',
      alt: 'Installazione impianti idraulici'
    },
    {
      titolo: 'Manutenzioni programmate',
      descrizione: 'Controlli e manutenzioni periodiche per garantire efficienza e sicurezza.',
      img: 'https://picsum.photos/640/400',
      alt: 'Manutenzione impianti idraulici'
    },
    {
      titolo: 'Bagni e cucine',
      descrizione: 'Realizzazione e ristrutturazione completa di bagni e cucine con opere idrauliche su misura.',
      img: 'https://picsum.photos/640/400',
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
