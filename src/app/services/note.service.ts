import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  private notesSubject = new BehaviorSubject<Note[]>([]);
  private isEdit = new BehaviorSubject<boolean>(false);

  constructor() {}

  setEditable(val:boolean) {
    this.isEdit.next(val);
  }

  getEditable() {
    return this.isEdit.asObservable();
  }

  getNotesObservable(): Observable<Note[]>{
    return this.notesSubject.asObservable();
  }

  createNote(note: Note): void {
     note.id = new Date().getTime();
     this.notes.push(note);
     this.notesSubject.next(this.notes);
  }

  updateNote(updatedNote: Note){
    const index = this.notes.findIndex(note => note.id === updatedNote.id);

    if(index !== -1){
      this.notes[index] = updatedNote;
      this.notesSubject.next(this.notes);
    }
  }  

  deleteNote(noteId:number){
    this.notes = this.notes.filter(item => item.id !== noteId);
    this.notesSubject.next(this.notes);
  }

}
