import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMsg]'
})
export class MsgDirective implements OnInit {

  @Input() defaultColor: string = '';
  @Input() highlightColor: string = 'Cornsilk';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'normal');
    this.backgroundColor = this.defaultColor;
  }

  

}
