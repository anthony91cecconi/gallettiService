import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ristrutturazioni-edili',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './ristrutturazioni-edili.component.html',
  styleUrl: '../services.component.scss'
})
export class RistrutturazioniEdiliComponent implements OnInit {
  baseImg = "/img/servizi/restrutturazioni/service/";
  servizi:any[] = [
    {
      titolo: 'Rifacimento bagni e cucine',
      descrizione: 'Ristrutturazione completa o parziale di bagni, cucine e altre stanze con materiali certificati.',
      img: this.baseImg + 'bagni_cucine.png',
      alt: 'Rifacimento bagni e cucine'
    },
    {
      titolo: 'Facciate e tetti',
      descrizione: 'Restauro e manutenzione di facciate e coperture, impermeabilizzazioni e coibentazioni.',
      img: this.baseImg + 'facciate_tetti.png',
      alt: 'Restauro facciate e tetti'
    },
    {
      titolo: 'Opere murarie e impianti',
      descrizione: 'Opere murarie, impiantistica idraulica/elettrica e adeguamenti alle normative.',
      img: this.baseImg + 'impianti.png',
      alt: 'Opere murarie e impiantistiche'
    },
    {
      titolo: 'Rifiniture e posa pavimenti',
      descrizione: 'Finiture di pregio, cartongesso, tinteggiature e posa di pavimenti e rivestimenti.',
      img: this.baseImg + 'pavimenti.png',
      alt: 'Rifiniture e posa pavimenti'
    }
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Ristrutturazioni Edili | Lavori completi e su misura');
    this.meta.updateTag({
      name: 'description',
      content:
        'Ristrutturazioni edili per abitazioni, condomini, uffici e locali commerciali: rifacimento bagni e cucine, facciate e tetti, opere murarie e impianti, rifiniture e posa pavimenti. Chiavi in mano.'
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
