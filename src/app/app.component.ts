import {
  AfterViewInit,
  Component,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private containerRef: ViewContainerRef) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
}
