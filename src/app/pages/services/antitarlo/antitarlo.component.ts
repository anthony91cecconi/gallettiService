import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-antitarlo',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './antitarlo.component.html',
  styleUrl: '../services.component.scss'
})
export class AntitarloComponent implements OnInit {
  servizi : any[]= [
    {
      titolo: 'Ispezione preliminare',
      descrizione: 'Ispezione con tecniche professionali per individuare la presenza e l’estensione dei tarli.',
      img: 'https://picsum.photos/640/400',
      alt: 'Ispezione preliminare antitarlo'
    },
    {
      titolo: 'Trattamenti mirati',
      descrizione: 'Interventi calibrati sul tipo di oggetto/struttura e sul grado di infestazione.',
      img: 'https://picsum.photos/640/400',
      alt: 'Trattamenti mirati contro i tarli'
    },
    {
      titolo: 'Prodotti certificati ed ecologici',
      descrizione: 'Soluzioni sicure per ambienti domestici e lavorativi, con prodotti certificati.',
      img: 'https://picsum.photos/640/400',
      alt: 'Prodotti certificati ed ecologici'
    },
    {
      titolo: 'Protezione preventiva',
      descrizione: 'Applicazioni preventive per preservare il legno da future infestazioni.',
      img: 'https://picsum.photos/640/400',
      alt: 'Protezione preventiva del legno'
    },
    {
      titolo: 'Assistenza post-trattamento',
      descrizione: 'Monitoraggio e consigli utili per la manutenzione nel tempo.',
      img: 'https://picsum.photos/640/400',
      alt: 'Assistenza post trattamento antitarlo'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Antitarlo | Trattamenti professionali e sicuri per il legno');
    this.meta.updateTag({
      name: 'description',
      content:
        'Servizio antitarlo specializzato: ispezione, trattamenti mirati, prodotti certificati ed ecologici, protezione preventiva e assistenza post-trattamento. Ideale per mobili, travi, parquet e strutture in legno.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
