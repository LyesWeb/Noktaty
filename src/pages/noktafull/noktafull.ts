import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoktafullPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noktafull',
  templateUrl: 'noktafull.html',
})
export class NoktafullPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoktafullPage');
  }

  visible = false;
  toggle() {
   this.visible = !this.visible;
  }
  isFav = false;
  addtofavo() {
    this.isFav = !this.isFav;
   }

}
