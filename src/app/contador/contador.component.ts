import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title = 'AngularProjeto';
  valor = 0
  valorinput: number=0

  somar(){
    this.validarnumero()
    this.valorinput++
    }
  diminuir(){
    this.valorinput--
    this.validarnumero()
    }
    validarnumero(){

      if(this.valorinput<0){
        this.valorinput=0
      }
    }
}
