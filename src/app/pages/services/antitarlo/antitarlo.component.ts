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
  baseImg = "/img/servizi/antitarlo/service/";
  servizi : any[]= [
    {
      id : 1,
      titolo: 'Ispezione preliminare',
      descrizione: 'Ispezione con tecniche professionali per individuare la presenza e l’estensione dei tarli.',
      img: this.baseImg + 'ispezione_preliminare.png',
      alt: 'Ispezione preliminare antitarlo'
    },
    {
      id : 2,
      titolo: 'Trattamenti mirati',
      descrizione: 'Interventi calibrati sul tipo di oggetto/struttura e sul grado di infestazione.',
      img: this.baseImg + 'trattamenti_mirati.png',
      alt: 'Trattamenti mirati contro i tarli'
    },
    {
      id : 3,
      titolo: 'Prodotti certificati ed ecologici',
      descrizione: 'Soluzioni sicure per ambienti domestici e lavorativi, con prodotti certificati.',
      img: this.baseImg + 'prodotti_certificati.png',
      alt: 'Prodotti certificati ed ecologici'
    },
    {
      id : 4,
      titolo: 'Protezione preventiva',
      descrizione: 'Applicazioni preventive per preservare il legno da future infestazioni.',
      img: this.baseImg + 'protezione_preventiva.png',
      alt: 'Protezione preventiva del legno'
    },
    {
      id : 5,
      titolo: 'Assistenza post-trattamento',
      descrizione: 'Monitoraggio e consigli utili per la manutenzione nel tempo.',
      img: this.baseImg + 'assistenza.png',
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
