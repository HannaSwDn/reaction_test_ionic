import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  begin() {
    // create a randomized number variable
    let seconds: number;
    seconds = (Math.random() * 7) + 2;
    let display: HTMLElement;
    display = document.getElementById('result')
    let displaySeconds: string;
    displaySeconds = String(seconds)
    display.innerHTML = displaySeconds

    // set background color to another color when number variable is reached


    // create a timer to see how long it takes for user to press screen

    // change background color back when user presses screen

    // display result in DOM

    // reset result
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
