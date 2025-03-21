import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadSongsServiceService {

  private audio = new Audio();

  private playlist: string[] = [
    './sounds/sound1.mp3',
    './sounds/sound2.mp3',
    './sounds/sound3.mp3',
    './sounds/sound4.mp3',
    './sounds/sound5.mp3',
    './sounds/sound6.mp3',
    './sounds/sound7.mp3',
    './sounds/sound8.mp3',
    './sounds/sound9.mp3',
    './sounds/sound10.mp3',
    './sounds/sound11.mp3',
    './sounds/sound12.mp3',
    './sounds/sound13.mp3',
    './sounds/sound14.mp3',
    './sounds/sound15.mp3',
    './sounds/sound16.mp3',
    './sounds/sound17.mp3',
    './sounds/sound18.mp3',
    './sounds/sound19.mp3',
    './sounds/sound20.mp3',
    './sounds/sound21.mp3',
    './sounds/sound22.mp3',
    './sounds/sound23.mp3',
    './sounds/sound24.mp3',
    './sounds/sound25.mp3',
    './sounds/sound26.mp3',
    './sounds/sound27.weba',
  ];

  constructor(private http: HttpClient) {
  }

  playRandom() {
    const randomIndex = Math.floor(Math.random() * this.playlist.length);
    this.playSound(this.playlist[randomIndex]);
  }

  playSound(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }


}
