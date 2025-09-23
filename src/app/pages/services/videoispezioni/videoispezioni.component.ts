import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-videoispezioni',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './videoispezioni.component.html',
  styleUrl: '../services.component.scss'
})
export class VideoispezioniComponent implements OnInit {
  baseImg = "/img/servizi/videoispezioni/service/";
  servizi: any[] = [
    {
      id: 1,
      titolo: 'Localizzazione occlusioni e perdite',
      descrizione: 'Identificazione precisa di occlusioni, rotture e perdite nelle condotte.',
      img: this.baseImg+ 'occlusioni.png',
      alt: 'Localizzazione perdite e occlusioni'
    },
    {
      id: 2,
      titolo: 'Verifica usura tubazioni',
      descrizione: 'Controllo dello stato di usura di tubi e collettori.',
      img: this.baseImg+ 'usura_tubazioni.png',
      alt: 'Verifica usura tubazioni'
    },
    {
      id: 3,
      titolo: 'Mappatura reti fognarie',
      descrizione: 'Mappatura e monitoraggio delle reti fognarie e impianti idrici.',
      img: this.baseImg+ 'Mappatura_reti_fognarie.png',
      alt: 'Mappatura reti fognarie'
    },
    {
      id: 4,
      titolo: 'Report dettagliati',
      descrizione: 'Fornitura di report con immagini e registrazioni video.',
      img: this.baseImg+ 'Report_dettagliati.png',
      alt: 'Report dettagliati videoispezione'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Videoispezioni | Analisi precise e non invasive');
    this.meta.updateTag({
      name: 'description',
      content:
        'Servizio di videoispezioni con telecamere ad alta definizione: localizzazione perdite, verifica usura tubazioni, mappatura reti fognarie e report dettagliati.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
