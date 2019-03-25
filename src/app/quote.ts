export class Quote {
    public upvote:number;
    public downvote:number;
    public showQuoteDetails:boolean;
    constructor(public id:number, public name:string, public quote:string, public writtenDate:Date){
        this.showQuoteDetails = false;
    }
  
}
