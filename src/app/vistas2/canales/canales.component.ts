import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/shared2/interfaces2/datos';
import { ServicioService } from 'src/app/shared2/servicios2/servicio.service';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css']
})
export class CanalesComponent implements OnInit {

  // Definición de un array de los datos de los jugadores
  public athleticPlayers : any;
  constructor(private servicioService : ServicioService) {

  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas() : void{
    this.servicioService.recuperarEntradas().subscribe(
      (data) => {
        this.athleticPlayers = data;
      },
      (error) => {

      },
      () => {

      }
    )

  }

  /**
   * Muestra del nombre del jugador, cuando se clique sobre su apartado
   * @param name
   */
  public mostrarNombre(name : string) : void{
    alert(`Nombre : ${name}`);
  }
}
