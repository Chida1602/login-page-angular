import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forumpagebox',
  templateUrl: './forumpagebox.component.html',
  styleUrls: ['./forumpagebox.component.css']
})
export class ForumpageboxComponent {
  @Input() pd: any;

  isReplay = false;
  replayText = '';
  replay() {
    if (this.isReplay == false) {
      this.isReplay = true;
    } else {
      this.isReplay = false;
    }
    console.log('Replay Clicked');
  }

  submitReplay() {
    console.log(this.replayText);
    this.replayText = '';
    this.isReplay = false;
  }
}
