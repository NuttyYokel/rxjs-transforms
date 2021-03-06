import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  a = new Subject<string>();
  b = new Subject<string>();
  t = new Subject<void>();
  c = this.a.asObservable().pipe(buffer(this.t.asObservable()));

  constructor() {}

  setA(value: string) {
    this.a.next(value);
  }

  setB(value: string) {
    this.b.next(value);
  }

  trigger() {
    this.t.next();
  }
}
