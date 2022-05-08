import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private _document: any) {}
  ngOnInit(): void {
    this._document.body.classList.add('bg-color');
  }
  ngOnDestroy() {
    this._document.body.classList.remove('bg-color');
  }
}
