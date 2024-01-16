import { Component } from '@angular/core';
import { Note } from './interfaces/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do-List';
  selectedNoteFromParent!: Note;

  selectedEditableNote(note: Note) {
    this.selectedNoteFromParent = note;
  }
}
