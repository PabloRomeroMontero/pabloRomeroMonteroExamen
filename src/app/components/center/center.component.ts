import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Centros} from '../../interfaces/centros';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  centros: Centros[] = [];
  centro: Centros = null;
  id = '';

  constructor(private fire: FirebaseService, private router: ActivatedRoute, private route: Router) {
    this.fire.getCentros().subscribe(resp => {
      this.centros = resp;
      this.searchCentro(this.id);
    });
  }

  private searchCentro(id: string) {
    for (const centroId of this.centros) {
      if (id === centroId.id) {
        this.centro = centroId;
        console.log(this.centro);
      }
    }
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
    });
  }

  ir(id: string) {
    this.route.navigate(['center', id]);
  }
}
