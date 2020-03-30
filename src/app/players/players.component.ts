import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { 

  }

  Player: string[] = [
  'Spiderman' ,
  'Captain America'  ,
  'Wonderwoman' ,
  'Popcorn' ,
  'Gemwoman' ,
   'Bolt' ,
  'Antwoman' ,
  'Mask' ,
  'Tiger' ,
   'Captain' ,
   'Catwoman' ,
  'Fish' ,
  'Hulk' ,
  'Ninja' ,
  'Black Cat' ,
  'Volverine' ,
  'Thor' ,
  'Slayer' ,
  'Vader' ,
  'Slingo' 
 ];



   detailedPlayer=[];
  ngOnInit(): void {

    this.players(this.Player);
  }

//   player: Player[];

//   viewPlayers(player);

   players = (player) => {

    
  
    for(let i:number = 0; i < 20;i++)
    {
                   this.detailedPlayer[i]={
                   name: player[i],
                   strength: this. getRandomStrength(),
                   image: '../assets/super-' + (i + 1) + '.png',
                   type: (i%2==0)? 'hero' : 'villain'
                  }
    }
  }

    getRandomStrength = () => {
      // Return a random integer (0,100]
      // Note: You can use Math.random() and Math.ceil()
      var strength=Math.random();
      return Math.ceil(strength);
  }
  
}


