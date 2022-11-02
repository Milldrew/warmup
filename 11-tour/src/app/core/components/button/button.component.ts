import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  buttonText = 'buttonText';

  constructor() {}

  ngOnInit(): void {}
}
