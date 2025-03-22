import { Component, OnInit } from '@angular/core';
import { LoadSongsServiceService } from '../load-songs-service.service';

@Component({
  selector: 'app-player',
  imports: [],
  standalone: true,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit{

  constructor(private loadSongsService:LoadSongsServiceService){

  }

  ngOnInit(): void {
  }

  onPlay(){
    this.loadSongsService.playRandomNumber()
  }


}
