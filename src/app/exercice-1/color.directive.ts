import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  color: string;
  

  constructor(private el: ElementRef) { 
  }

  @HostListener('window:keydown', ['$event']) windowClick($event) {
    console.log($event.keyCode);

    switch ($event.keyCode) {
      case 37:
      this.color = 'orange'; 
        break;
      case 38:
      this.color = 'red';
        break;
      case 39:
      this.color = 'blue';
        break;
      case 40:
      this.color = 'green';
        break;
      default:
      this.color = 'grey';
        break;
    }
    this.colorLine(this.color);
  }

  private colorLine(colortext: string) {
    this.el.nativeElement.style.color = colortext;
  }



}
