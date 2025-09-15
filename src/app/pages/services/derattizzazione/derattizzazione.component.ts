import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-derattizzazione',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './derattizzazione.component.html',
  styleUrl: '../services.component.scss'
})
export class DerattizzazioneComponent implements OnInit {
  servizi :any[] = [
    {
      titolo: 'Derattizzazione',
      descrizione: 'Ispezione accurata degli ambienti per individuare focolai e vie di accesso.',
      extra: 'Utilizzo di prodotti certificati e sicuri per persone e animali domestici. Monitoraggio continuo per garantire risultati duraturi.',
      img: 'https://picsum.photos/640/400',
      alt: 'Intervento di derattizzazione'
    },
    {
      titolo: 'Antitarlo',
      descrizione: 'Trattamento specializzato per eliminare l’infestazione e proteggere il legno a lungo termine.',
      extra: 'Ispezione preliminare, trattamenti mirati in base al tipo di legno e al grado di infestazione, utilizzo di prodotti certificati ed ecologici. Protezione preventiva e assistenza post-trattamento.',
      img: 'https://picsum.photos/640/400',
      alt: 'Trattamento antitarlo su mobili e strutture'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Derattizzazione e Antitarlo | Servizi professionali');
    this.meta.updateTag({
      name: 'description',
      content:
        'Servizi di derattizzazione e trattamenti antitarlo: soluzioni mirate e sicure per abitazioni, aziende e condomini. Prodotti certificati e monitoraggio costante.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
