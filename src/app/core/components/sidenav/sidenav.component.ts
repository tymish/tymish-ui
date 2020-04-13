import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  sideNavOpened = false;
  sideNavMode: 'side' | 'over' = 'over';

  ngOnInit() {
    if (screen.width > 975) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
    }
  }

  toggle() {
    this.sidenav.toggle();
  }
}
