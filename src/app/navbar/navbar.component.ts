import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleExpansion(): boolean {
    this.isExpanded = !this.isExpanded;
    return this.isExpanded;
  }

}
