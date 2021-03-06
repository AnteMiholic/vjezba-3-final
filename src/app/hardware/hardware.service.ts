import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Hardware} from "./hardware";
import {HARDWARES} from "./HARDWARES";

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor() { }

  getHardwares(): Observable<Hardware[]> {
    return of(HARDWARES);
  }
}
