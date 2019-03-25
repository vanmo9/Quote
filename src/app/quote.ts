export class Quote {
    public upvote:number;
    public downvote:number;
    public showQuoteDetails:boolean;
    constructor(public id:number, public quote:string, public author:string, public writtenDate:Date){
        this.showQuoteDetails = false;
    }

}
