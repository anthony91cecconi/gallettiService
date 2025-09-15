import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sanificazione',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './sanificazione.component.html',
  styleUrl: '../services.component.scss' // per ora CSS generico
})
export class SanificazioneComponent implements OnInit {
  servizi:any[] = [
    {
      titolo: 'Ambienti condominiali',
      descrizione: 'Trattamenti mirati per scale, ascensori, androni e garage condominiali.',
      img: 'https://picsum.photos/640/400',
      alt: 'Sanificazione ambienti condominiali'
    },
    {
      titolo: 'Uffici e scuole',
      descrizione: 'Sanificazione completa di uffici, aule scolastiche e aree comuni.',
      img: 'https://picsum.photos/640/400',
      alt: 'Sanificazione uffici e scuole'
    },
    {
      titolo: 'Attività commerciali e ristoranti',
      descrizione: 'Interventi in negozi, ristoranti e strutture ricettive con prodotti certificati.',
      img: 'https://picsum.photos/640/400',
      alt: 'Sanificazione negozi e ristoranti'
    },
    {
      titolo: 'Interventi periodici o straordinari',
      descrizione: 'Piani di sanificazione su misura in base alle esigenze del cliente.',
      img: 'https://picsum.photos/640/400',
      alt: 'Sanificazione periodica o straordinaria'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Sanificazione | Interventi certificati per ambienti sicuri');
    this.meta.updateTag({
      name: 'description',
      content:
        'Sanificazione professionale di abitazioni, condomini, uffici, scuole, attività commerciali e ambienti industriali. Prodotti certificati, personale qualificato, procedure a norma.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
