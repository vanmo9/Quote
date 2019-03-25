import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  
  //deleting
  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  
  
  downvote = 0;
  upvote = 0;

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
/*
  upVote(index){
  
    this.quote[index].upvote = ++this.quote[index].upvote

  }
  downVote(index){

    this.quote[index].downvote = ++this.quote[index].downvote

  }
  */

  constructor() { }

  ngOnInit() {
  }

}
