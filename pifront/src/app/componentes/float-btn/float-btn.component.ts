import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.css']
})
export class FloatBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 

    window.scrollTo(0,0);
    
   }
  }
