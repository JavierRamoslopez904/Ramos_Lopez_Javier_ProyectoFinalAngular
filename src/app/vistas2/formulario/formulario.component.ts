import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared2/clases2/usuario';
import { LoginService } from 'src/app/shared2/servicios2/login.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //Atributos
  public usuario : Usuario

  constructor(
    private formularioService : LoginService,
    private router: Router){
      this.usuario = new Usuario();
    }


  ngOnInit(): void {
  }

  public submit() : void{
    this.formularioService.login(this.usuario).subscribe(
      (data : number) => {
        localStorage.setItem('nombreUsuario', this.usuario.nombre);
        localStorage.setItem('miTokenPersonal',`${ data }`);

        this.router.navigate(['/canales']);
      },
      (error : Error) => {
        console.error("Error al realizar el acceso");
      }
    )
  }

}
