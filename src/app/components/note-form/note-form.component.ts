import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent implements OnInit, OnChanges {

noteForm!: FormGroup;
isEditable!: boolean;
@Input() selectedNote!:Note;

constructor(private noteService: NoteService, private formBuilder: FormBuilder){

   this.noteService.getEditable().subscribe((res:boolean) =>{
    this.isEditable = res;
  })
}

ngOnInit(): void {

  this.noteForm = this.formBuilder.group({
    id: new Date().getTime(),
    title: ['', Validators.required],
    content: ['']
  })
}

ngOnChanges(changes: SimpleChanges): void {
  if(changes['selectedNote']?.currentValue){
    const val = changes['selectedNote']?.currentValue;
    this.noteForm.patchValue({
      id: val.id,
      title: val.title,
      content: val.content
    })
  }
}

onSubmit() {
  if(this.noteForm.invalid) {
    return;
  }
  const note: Note = this.noteForm.value;

  if(this.isEditable){
    this.noteService.updateNote(note);
    this.noteService.setEditable(false);
  }
  else{
  // Save The note values in Service
  this.noteService.createNote(note);
  }

// this.noteService.getNotesObservable().subscribe((res: Note[]) => {
//   console.log(res);
// });

// Clear The Form Values (reset)
  this.noteForm.reset();
}

}
