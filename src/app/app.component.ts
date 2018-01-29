import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myitems = [{item:'hi'},{item: 'hello'},{item: 'hey there'}];
  selected = 'Select...'
  myclick(sender){
    console.log(sender);
    this.selected = this.myitems[sender].item + sender;
  }
}
