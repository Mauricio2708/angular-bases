import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class CharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emiteCharacter(): void {
    // debugger;
    // console.log(this.character);

    if (this.character.name.trim().length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }


}
