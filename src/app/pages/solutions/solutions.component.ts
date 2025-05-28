import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {

  @ViewChild('carouselOverflow') carouselOverflow!: ElementRef;

  contents : Solution[] = [
    {
      text: "text 1",
      title: "titolo 1",
      select: true
    },
    {
      text: "text 2",
      title: "titolo 2",
      select: false
    },
    {
      text: "text 3",
      title: "titolo 3",
      select: false
    },
    {
      text: "text 4 ",
      title: "titolo 4",
      select: false
    },
    {
      text: "text 5 ",
      title: "titolo 5 ",
      select: false
    },
    {
      text: "text 6 ",
      title: "titolo 6 ",
      select: false
    }
  ];


  public content : Solution;
  constructor(){
    this.content = this.contents[0];
  }

  public changetext(select:number): void{
    console.log(select);

    this.contents.forEach(el => el.select =false );

    this.contents[select].select = true;
    this.content = this.contents[select];
  }

  public onWheel(event: WheelEvent): void {
    event.preventDefault();

    const carouselElement = this.carouselOverflow.nativeElement;

    carouselElement.scrollLeft += event.deltaY;
  }

}

export interface Solution{
  text : string;
  title : string;
  select : boolean;
}
