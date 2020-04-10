import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  sideNavOpened = false;
  sideNavMode: 'side' | 'over' = 'over';

  ngOnInit() {
    if (screen.width > 975) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
    }
  }
}
