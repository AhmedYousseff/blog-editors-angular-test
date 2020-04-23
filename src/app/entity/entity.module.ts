import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium/medium.component';
import { EditorjsComponent } from './editorjs/editorjs.component';



@NgModule({
  declarations: [MediumComponent, EditorjsComponent],
  imports: [
    CommonModule
  ]
})
export class EntityModule { }
