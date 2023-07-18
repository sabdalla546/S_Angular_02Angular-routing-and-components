import { Component ,Input , Output , EventEmitter} from '@angular/core';
import { Room } from 'src/app/shared/model/room.module';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input() roomsList:Room[]=[];
  @Output() selectedRoom = new EventEmitter();
  onSelectedRoom(room:Room){
    this.selectedRoom.next(room)
  }
}
