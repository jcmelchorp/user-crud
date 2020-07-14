import { Component } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOutAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
    ]),
  ],
})
export class AppComponent {
  title = 'user-crud';
  mediaSub: Subscription;
  deviceSm: boolean;
  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceSm = result.mqAlias === 'sm' || result.mqAlias === 'xs' ? true : false;
      }
    );
  }
}
