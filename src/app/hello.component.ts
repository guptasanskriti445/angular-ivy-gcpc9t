import { Component, Input, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, OnDestroy {
  @Input() name: string;
  constructor(@Inject(DOCUMENT) private _document: any) {}
  ngOnInit(): void {
    this._document.body.classList.add('bg-color');
  }
  ngOnDestroy() {
    this._document.body.classList.remove('bg-color');
  }
}
