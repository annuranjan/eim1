import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentpage',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  @Input() submenuRequested;

  constructor() { }

  ngOnInit() { }

}
