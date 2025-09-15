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
  servizi: any[] = [
    {
      titolo: 'Fosse biologiche e pozzi neri',
      descrizione: 'Spurgo e pulizia di fosse biologiche, pozzi neri e reti fognarie.',
      img: 'https://picsum.photos/640/400',
      alt: 'Spurgo fosse biologiche'
    },
    {
      titolo: 'Cisterne',
      descrizione: 'Svuotamento e manutenzione di vasche e cisterne.',
      img: 'https://picsum.photos/640/400',
      alt: 'Svuotamento e manutenzione cisterne'
    },
    {
      titolo: 'Tubazioni e scarichi',
      descrizione: 'Disostruzione tubazioni e scarichi intasati con tecniche ad alta pressione.',
      img: 'https://picsum.photos/640/400',
      alt: 'Disostruzione tubazioni e scarichi'
    },
    {
      titolo: 'Videoispezioni',
      descrizione: 'Videoispezioni fognarie per individuare guasti e perdite.',
      extra: 'Il nostro servizio permette di analizzare in modo preciso e non invasivo lo stato delle tubazioni, evitando interventi distruttivi.',
      img: 'https://picsum.photos/640/400',
      alt: 'Videoispezione tubazioni'
    },
    {
      titolo: 'Smaltimento rifiuti liquidi',
      descrizione: 'Smaltimento rifiuti liquidi nel rispetto delle normative ambientali.',
      img: 'https://picsum.photos/640/400',
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
