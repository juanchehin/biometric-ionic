import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';

// @IonicPage()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [NavParams]
})
export class DashboardPage implements OnInit {

  data = { name: ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public setAndGet: SettersandgettersProvider) {
    console.log(this.setAndGet.UserName)
    this.data.name = this.setAndGet.UserName;
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
  }

  public gotToPage(num: any){

  }


}
