import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  my_champion = 'Panteon!';
  user = 'Wu Xilao';
  age = 10;
  a=2;
  b=3;
  summ=;
  sum(){ this.a+this.b;}
  constructor() { }

  ngOnInit() {
  }


  setNasus() {
    this.my_champion = 'Nasus';
  }
      setKatarina() {
    this.my_champion = 'Katarina';
}
    setAnivia(){
    this.my_champion = 'Anivia';
    }


  fff() {

  }
}
