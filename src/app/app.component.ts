import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
