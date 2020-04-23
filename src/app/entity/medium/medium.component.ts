import {AfterViewInit, Component, ElementRef, SecurityContext, ViewChild} from '@angular/core';
import MediumEditor from 'medium-editor/dist/js/medium-editor.js';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.scss']
})
export class MediumComponent implements AfterViewInit {
  @ViewChild('editable', {static: true}) editable: ElementRef;
  @ViewChild('header', {static: true}) header: ElementRef;



  editor: MediumEditor = new MediumEditor();
  title: MediumEditor = new MediumEditor();

  constructor() {
  }

  ngAfterViewInit(): void {


    this.title =  new MediumEditor(this.header.nativeElement,  {
      placeholder: {
        text: 'TITLE'
      }
    }),
    this.editor = new MediumEditor(this.editable.nativeElement,  {

      placeholder: {
        text: 'What is in your mind',
        alignItems: '50px',
      },
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'quote'],
      },
    });
    console.error(this.editor);
  }
}
