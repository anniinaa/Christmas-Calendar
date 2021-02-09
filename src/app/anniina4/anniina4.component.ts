import { poemlist } from './../poemlist';
import { Poem } from './../poems';
import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-anniina4',
  templateUrl: './anniina4.component.html',
  styleUrls: ['./anniina4.component.css']
})
export class Anniina4Component implements OnInit {

  selectPoem:Poem;
  formattedPoemText: String[];

  runolista = poemlist;

  onSelect(poem:Poem):void{
    this.formattedPoemText = poem.text.split(/\n/g);
    
    this.selectPoem = poem;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
