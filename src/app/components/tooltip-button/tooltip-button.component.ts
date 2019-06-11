import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.scss']
})
export class TooltipButtonComponent implements OnInit {

  visible = false;
  tooltipAbove = true;

  @Input() tolltipText = 'tooltip';
  @Input() buttonText = 'button';

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.visible = false;

    }
  }

  @HostListener('document:click', ['$event'])
  clickin(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.visible = false;
    }
  }

  @HostListener("window:scroll", [])
  onScroll(): void {    
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('its here');
    }
  }

  showTooltip() {
    setTimeout( () => {
        this.visible = true;
      }, 10 );
  }

}
