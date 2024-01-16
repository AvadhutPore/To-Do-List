import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})

export class NoteListComponent implements OnInit {

  notes: Note[] = [];
  @Output() selectedNote = new EventEmitter<Note>();

  constructor(private noteService: NoteService) {

  }

  ngOnInit(): void {
    this.noteService.getNotesObservable().subscribe((res:Note[]) =>{
      this.notes = res;
    });
  }

  editNote(note: Note){
    this.noteService.setEditable(true);
    this.selectedNote.emit(note);
  }

  deleteNote(noteId: number){
    this.noteService.deleteNote(noteId);
  }

}
