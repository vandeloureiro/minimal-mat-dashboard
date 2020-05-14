import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen = true;
  sidebarMode = 'side';

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    this.observaTrocaDePagina();
  }

  // no mobile, ao clicar em uma menu o sidebar deve sumir
  observaTrocaDePagina() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.sidebarMode === 'over') {
          this.sidebarOpen = false;
        }
      }
    });
  }

  // monitora a forma do sidebar (ao lado ou por cima) dependendo o tamanho
  /*
  observaMediaQuery() {
    this.mediaObserver.asObservable().subscribe(
      media => {
        if (media[0].mqAlias === 'sm' || media[0].mqAlias === 'xs') {
          this.sidebarOpen = false;
          this.sidebarMode = 'over';
        } else {
          this.sidebarOpen = true;
          this.sidebarMode = 'side';
        }
      }
    );
  }*/


  sidebarToggler(event) {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
