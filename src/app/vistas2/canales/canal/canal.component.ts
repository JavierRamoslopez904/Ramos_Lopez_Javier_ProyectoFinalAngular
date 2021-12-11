import { Component,Input, OnInit } from '@angular/core';
import  {Datos} from 'src/app/shared2/interfaces2/datos';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {
  @Input()
  public datos : Datos;
  constructor() {
    this.datos = {
      postId : 0,
      id : 0,
      name : '',
      email : '',
    }
   }

  ngOnInit(): void {
  }

}
