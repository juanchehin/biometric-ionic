import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from '@ionic/angular';
import { NavController, NavParams } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { UtilityProvider } from '../../providers/utility/utility'
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx/';
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [NavParams,UtilityProvider,FingerprintAIO]
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public utility: UtilityProvider,
    public faio: FingerprintAIO, public setAndGet: SettersandgettersProvider) { }

  ngOnInit() {
  }

  data = {
    userName: ""
  }

  ionViewDidLoad() {
  }

  login(){
    if (!this.data.userName)
    {
      this.utility.presentAlert("Please enter Username!");
      return;
    }
    else {
      console.log("else")
      this.utility.presentAlert("cartel de else");
    //Check if Fingerprint or Face  is available
    this.faio.isAvailable()
    .then(result => {
      console.log('resulta es : ', result);
      if(result === "finger" || result === "face"){
        //Fingerprint or Face Auth is available
        console.log("Fingerprint or Face Exist!")
        this.faio.show({
          title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
         subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
         description: 'Please authenticate', // optional | Default: null
         fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
                                            // When disableBackup is true defaults to "Cancel"
         disableBackup:true,  // optional | default: false
        })
        .then((result: any) => {
          console.log(result);
          if(result == "Success"){
          //Fingerprint/Face was successfully verified
          //Go to dashboard
          this.setAndGet.UserName = this.data.userName;
          this.navCtrl.navigateRoot("DashboardPage")
          }
          else {
          //Fingerprint/Face was not successfully verified
            this.utility.presentAlert(result);
            console.log(result);
          }
        })
        .catch((error: any) => {
          //Fingerprint/Face was not successfully verified
          this.utility.presentAlert(error);
          console.log(error);
        });
      }
      else {
        //Fingerprint or Face Auth is not available
        this.utility.presentAlert("Fingerprint/Face Auth is not available on this device!");
        console.log("Fingerprint/Face Auth is not available on this device!")
      }
    })
    }
  }


}
