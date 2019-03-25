import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes = [
    new Quote(1, 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.', 'Albert Einstein', 'Mohamed Hassan', new Date(2019, 5, 7)),
    new Quote(2, 'I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.', 'Bill Gates', 'Mohamed Hassan', new Date(2019, 0, 3)),
    new Quote(3, 'The future belongs to those who prepare for it today.', 'Malcolm X', 'Xavi Alonso', new Date(2019, 8, 1)),
    new Quote(4, 'It always seems impossible until it’s done.', ' Nelson Mandela', 'Alisson Becker', new Date(2019, 1, 9)),
  ]

  toogleDetails(index) {
    this.Quotes[index].showQuoteDetails = !this.Quotes[index].showQuoteDetails;
  }

  //delete function
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)

      if (toDelete) {
        this.Quotes.splice(index, 1)
      }
    }

  }

  //add Quote Function
  addNewQuote(quote) {
    let quoteLength = this.Quotes.length;
    quote.id = quoteLength + 1;
    quote.writtenDate = new Date(quote.writtenDate)
    this.Quotes.push(quote)

  }


  constructor() { }

  ngOnInit() {
  }

}
