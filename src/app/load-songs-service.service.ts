import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadSongsServiceService {

  private audio = new Audio();

  private playlist: string[] = [
    'very_silly_app/sounds/sound1.mp3',
    'very_silly_app/sounds/sound2.mp3',
    'very_silly_app/sounds/sound3.mp3',
    'very_silly_app/sounds/sound4.mp3',
    'very_silly_app/sounds/sound5.mp3',
    'very_silly_app/sounds/sound6.mp3',
    'very_silly_app/sounds/sound7.mp3',
    'very_silly_app/sounds/sound8.mp3',
    'very_silly_app/sounds/sound9.mp3',
    'very_silly_app/sounds/sound10.mp3',
    'very_silly_app/sounds/sound11.mp3',
    'very_silly_app/sounds/sound12.mp3',
    'very_silly_app/sounds/sound13.mp3',
    'very_silly_app/sounds/sound14.mp3',
    'very_silly_app/sounds/sound15.mp3',
    'very_silly_app/sounds/sound16.mp3',
    'very_silly_app/sounds/sound17.mp3',
    'very_silly_app/sounds/sound18.mp3',
    'very_silly_app/sounds/sound19.mp3',
    'very_silly_app/sounds/sound20.mp3',
    'very_silly_app/sounds/sound21.mp3',
    'very_silly_app/sounds/sound22.mp3',
    'very_silly_app/sounds/sound23.mp3',
    'very_silly_app/sounds/sound24.mp3',
    'very_silly_app/sounds/sound25.mp3',
    'very_silly_app/sounds/sound26.mp3',
    'very_silly_app/sounds/sound27.weba',
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
