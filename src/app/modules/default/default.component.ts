import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen = true;
  sidebarMode = 'size';

  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit() {
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
  }

  sidebarToggler() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
