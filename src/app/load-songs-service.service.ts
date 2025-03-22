import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadSongsServiceService {

  private audio = new Audio();
  private last = -1; 
  private playlist: string[] = [
    './sounds/sound1.opus',
    './sounds/sound2.opus',
    './sounds/sound3.opus',
    './sounds/sound4.opus',
    './sounds/sound5.opus',
    './sounds/sound6.opus',
    './sounds/sound7.opus',
    './sounds/sound8.opus',
    './sounds/sound9.opus',
    './sounds/sound10.opus',
    './sounds/sound11.opus',
    './sounds/sound12.opus',
    './sounds/sound13.opus',
    './sounds/sound14.opus',
    './sounds/sound15.opus',
    './sounds/sound16.opus',
    './sounds/sound17.opus',
    './sounds/sound18.opus',
    './sounds/sound19.opus',
    './sounds/sound20.opus',
    './sounds/sound21.opus',
    './sounds/sound22.opus',
    './sounds/sound23.opus',
    './sounds/sound24.opus',
    './sounds/sound25.opus',
    './sounds/sound26.opus',
  ];

  constructor(private http: HttpClient) {
  }

  // getRandomNumber(): void {
  //   this.randomNumber = this.rand(0, this.length - 1);
  // }

  rand(a: number, b: number): number {
    const rnd = a + Math.floor((b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32);
    if (rnd === this.last) {
      return this.rand(a, b);
    } else {
      this.last = rnd;
      return rnd;
    }
  }

  playRandomNumber(){
    const randomIndex = this.rand(0, this.playlist.length - 1)
    this.playSound(this.playlist[randomIndex])
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
