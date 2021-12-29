import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  heroes: string[] = ['Spider-Man', 'Iron-Man', 'Hulk', 'Thor', 'Daredevil', 'Hawkeye'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log( this.heroeBorrado );
  }

}
