import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private speechRecognition: SpeechRecognition) { }

  start() {
    this.speechRecognition.startListening()
        .subscribe(
            (matches: string[]) => console.log(matches),
            (onerror) => console.log('error:', onerror)
        );
  }

  stop() {
    this.speechRecognition.stopListening();
  }

}
