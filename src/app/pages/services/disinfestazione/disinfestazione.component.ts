import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-disinfestazione',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './disinfestazione.component.html',
  styleUrl: '../services.component.scss'
})
export class DisinfestazioneComponent implements OnInit {
  servizi :any[]= [
    {
      titolo: 'Insetti volanti e striscianti',
      descrizione: 'Disinfestazione mirata di zanzare, mosche, vespe, blatte, formiche e altri infestanti.',
      img: 'https://picsum.photos/640/400',
      alt: 'Disinfestazione insetti volanti e striscianti'
    },
    {
      titolo: 'Interventi in condomini e aree esterne',
      descrizione: 'Azioni specifiche per spazi comuni condominiali, aree verdi e perimetrali.',
      img: 'https://picsum.photos/640/400',
      alt: 'Interventi in condomini e spazi comuni'
    },
    {
      titolo: 'Prevenzione e monitoraggio',
      descrizione: 'Piani di prevenzione e monitoraggio per evitare future infestazioni.',
      img: 'https://picsum.photos/640/400',
      alt: 'Piani di prevenzione e monitoraggio'
    },
    {
      titolo: 'Prodotti certificati e personale qualificato',
      descrizione: 'Prodotti sicuri e conformi alle normative della Regione Lazio, personale qualificato.',
      img: 'https://picsum.photos/640/400',
      alt: 'Prodotti certificati e personale qualificato'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Disinfestazione | Interventi mirati e prodotti certificati');
    this.meta.updateTag({
      name: 'description',
      content:
        'Disinfestazione professionale per abitazioni, condomini, uffici e spazi pubblici: trattamenti contro insetti volanti e striscianti, piani di prevenzione e monitoraggio, prodotti certificati conformi alle normative della Regione Lazio.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
