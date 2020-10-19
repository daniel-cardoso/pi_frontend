import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFeedPageComponent } from './dialog-feed-page/dialog-feed-page.component';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(DialogFeedPageComponent, {
      minWidth: '450px'}
      // ,data: {name: this.name, animal: this.animal}}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
