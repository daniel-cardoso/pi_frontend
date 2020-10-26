import { PostagemService } from 'src/app/service/postagem.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';

@Component({
  selector: 'app-dialog-postcompleto',
  templateUrl: './dialog-postcompleto.component.html',
  styleUrls: ['./dialog-postcompleto.component.css'],
})
export class DialogPostcompletoComponent implements OnInit {
  postagem: Postagem = new Postagem();
  idPost: number;

  constructor(
    private postagemService: PostagemService,
    public dialogRef: MatDialogRef<DialogPostcompletoComponent>
  ) {}

  ngOnInit() {
    this.findPostagemById();
  }

  findPostagemById() {
    this.postagemService.getByIdPostagem(this.idPost).subscribe((resp: any) => {
      this.postagem = resp;
    });
  }
}
