import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  data = { name: ""}

  constructor(public navCtrl: NavController, public setAndGet: SettersandgettersProvider) {
    console.log(this.setAndGet.UserName)
    this.data.name = this.setAndGet.UserName;
   }

  ngOnInit() {
  }

  public gotToPage(num: any) {

  }

}
