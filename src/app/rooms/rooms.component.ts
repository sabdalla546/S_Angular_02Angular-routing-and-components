import { Component } from '@angular/core';
import { Room } from '../shared/model/room.module';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
    roomsList:Room[]=[
      {
        roomType:'Deluxe room',
        price:750,
        photo:"",
        checkinDate:new Date('11-july-2023'),
        checkoutDate:new Date('20-july-2023'),
      },
      {
        roomType:'private suite',
        price:1050,
        photo:"",
        checkinDate:new Date('11-july-2023'),
        checkoutDate:new Date('20-july-2023'),
      },
      {
        roomType:'Deluxe room',
        price:750,
        photo:"",
        checkinDate:new Date('11-july-2023'),
        checkoutDate:new Date('20-july-2023'),
      }
    ];
    selectedRo?:Room;
    onselectedRoom(room:Room){
      //console.log(room)
      this.selectedRo=room;
    }
}
