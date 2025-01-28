import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    { name: 'Goku', power: 10000 }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  //onDelete = Index value : number;

  // onDelete( index: number ): void {
  //   onDeleteCharacter(index);
  //   console.log('Index:', index);
  // }

  // onDeleteCharacter( index: number ): void {
  //   console.log('Index:', index);

  // }

  onDeleteCharacter( id?: string ): void {
    if ( !id ) return;
    console.log('id :', id);
    this.onDelete.emit( id );
  }

}
