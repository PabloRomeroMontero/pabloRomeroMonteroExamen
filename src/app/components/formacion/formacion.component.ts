import {Component, OnInit} from '@angular/core';
import {Cursos} from '../../interfaces/cursos';
import {FirebaseService} from '../../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Centros} from '../../interfaces/centros';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  cursos: Cursos[] = [];
  curso: Cursos = null;
  id = '';

  constructor(private fire: FirebaseService, private router: ActivatedRoute, private route: Router) {
    this.fire.getCursos().subscribe(resp => {
      this.cursos = resp;
      this.searchCentro(this.id);
    });
  }

  private searchCentro(id: string) {
    for (const cursoId of this.cursos) {
      if (id === cursoId.id) {
        this.curso = cursoId;
        console.log(this.cursos);
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
    this.route.navigate(['formacion', id]);
  }
}
