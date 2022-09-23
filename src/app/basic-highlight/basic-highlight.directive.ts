import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighLight]'
})

export class BasicHighLightDirective implements OnInit {
    constructor(private elRef: ElementRef) {}

    ngOnInit() {
        this.elRef.nativeElement.style.backgroundColor = 'green';
    }
}