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
  baseImg = "/img/servizi/disinfestazione/service/";
  servizi :any[]= [
    {
      id: 1,
      titolo: 'Insetti volanti e striscianti',
      descrizione: 'Disinfestazione mirata di zanzare, mosche, vespe, blatte, formiche e altri infestanti.',
      img: this.baseImg + 'volanti.png',
      alt: 'Disinfestazione insetti volanti e striscianti'
    },
    {
      id: 2,
      titolo: 'Interventi in condomini e aree esterne',
      descrizione: 'Azioni specifiche per spazi comuni condominiali, aree verdi e perimetrali.',
      img: this.baseImg + 'condomini_aree_esterne.png',
      alt: 'Interventi in condomini e spazi comuni'
    },
    {
      id: 3,
      titolo: 'Prevenzione e monitoraggio',
      descrizione: 'Piani di prevenzione e monitoraggio per evitare future infestazioni.',
      img: this.baseImg + 'prevenzione_monitoraggio.png',
      alt: 'Piani di prevenzione e monitoraggio'
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
