import { Component, OnInit } from '@angular/core';
import {Maps} from '../../interfaces/maps';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  loc: Maps[] = [];

  constructor(private fire: FirebaseService) { }

  ngOnInit() {
    this.fire.getMap().subscribe(data => {
      this.loc = data;
      console.log(this.loc);
    });
  }

}
