import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spurgo',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './spurgo.component.html',
  styleUrl: '../services.component.scss'
})
export class SpurgoComponent implements OnInit {
  baseImg = "/img/servizi/spurgo/service/";
  servizi: any[] = [
    {
      id: 1,
      titolo: 'Fosse biologiche e pozzi neri',
      descrizione: 'Spurgo e pulizia di fosse biologiche, pozzi neri e reti fognarie.',
      img: this.baseImg+'Fosse_biologiche_e_pozzi_neri.png',
      alt: 'Spurgo fosse biologiche'
    },
    {
      id: 2,
      titolo: 'Cisterne',
      descrizione: 'Svuotamento e manutenzione di vasche e cisterne.',
      img: this.baseImg+'cisterne.png',
      alt: 'Svuotamento e manutenzione cisterne'
    },
    {
      id: 3,
      titolo: 'Tubazioni e scarichi',
      descrizione: 'Disostruzione tubazioni e scarichi intasati con tecniche ad alta pressione.',
      img: this.baseImg+'tubazioni_e_scarichi.png',
      alt: 'Disostruzione tubazioni e scarichi'
    },
    {
      id: 4,
      titolo: 'Videoispezioni',
      descrizione: 'Videoispezioni fognarie per individuare guasti e perdite.',
      extra: 'Il nostro servizio permette di analizzare in modo preciso e non invasivo lo stato delle tubazioni, evitando interventi distruttivi.',
      img: this.baseImg+'Videoispezioni.png',
      alt: 'Videoispezione tubazioni'
    },
    {
      id: 5,
      titolo: 'Smaltimento rifiuti liquidi',
      descrizione: 'Smaltimento rifiuti liquidi nel rispetto delle normative ambientali.',
      img: this.baseImg+'smaltimento_rifiuti_liquidi.png',
      alt: 'Smaltimento rifiuti liquidi'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Spurgo | Servizio rapido e affidabile');
    this.meta.updateTag({
      name: 'description',
      content:
        'Servizio di autospurgo per privati, aziende ed enti pubblici. Fosse biologiche, cisterne, scarichi, videoispezioni e smaltimento rifiuti liquidi. Emergenze 24/7.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
