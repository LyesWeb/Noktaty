import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoktafullPage } from '../noktafull/noktafull';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  // secondPage = SecondPagePage;  

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
  visible = false;
  toggle() {
   this.visible = !this.visible;
  }
  gotoFull() {
    this.navCtrl.push(NoktafullPage);
  }
  
}
