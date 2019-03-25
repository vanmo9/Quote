import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes = [ 
    new Quote(1, `Nelson Kioko`, `Never give up on someone miracles happen everyday`, new Date(2019,2,21)),
    new Quote(2, `Curtis`, `It's amazing what doors can open if you reach out to people with a smile`, new Date(2019,0,21))
  ]

  toogleDetails(index){
    this.Quotes[index].showQuoteDetails = !this.Quotes[index].showQuoteDetails;
  }
  
//delete function
  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
        
        if(toDelete){
            this.Quotes.splice(index,1)
        }
    }
    
  }

  //add Quote Function
  addNewQuote(quote){
    let quoteLength = this.Quotes.length;
    quote.id=quoteLength+1;
    quote.writtenDate = new Date(quote.writtenDate)
    this.Quotes.push(quote)

}


  constructor() { }

  ngOnInit() {
  }

}
