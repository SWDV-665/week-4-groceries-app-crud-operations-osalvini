import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  //provider refactor code - data and data related functions
  // initialize data from dataService (provider)
  // AND call in html template *ngFor let item of loadItems() instead of let item of items

  loadItems() {
    return this.dataService.getItems();
  }
  removeItem(item, index) {
    console.log("removing item: ", item, index)
    const toast = this.toastCtrl.create({
      message: "removing item: " + index + " ...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  }
  editItem(item, index) {
    console.log("removing item: ", item, index)
    const toast = this.toastCtrl.create({
      message: "editing item: " + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }
  addItem() {
    console.log("adding item")
    this.inputDialogService.showPrompt()
  }

}
