import {Component, Input, OnInit} from '@angular/core';
import {Hardware} from "../hardware/hardware";

@Component({
  selector: 'app-hardware-rates',
  templateUrl: './hardware-rates.component.html',
  styleUrls: ['./hardware-rates.component.css']
})
export class HardwareRatesComponent implements OnInit {

  @Input() price : Number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
