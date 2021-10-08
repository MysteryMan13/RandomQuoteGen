import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../models/quote-model';
import { QuotesService } from '../service/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quote!:QuoteModel
  constructor(private quotesService:QuotesService) { }

  ngOnInit(): void {
          this.getQuotes();
     }
     freshQuote(){
           this.getQuotes();
     }
     getQuotes(){

      this.quotesService.getRandomQuotes().subscribe((data)=>{
        if(data){
          this.quote=new QuoteModel(data.content, data.author)
              }
          })

     }
}
