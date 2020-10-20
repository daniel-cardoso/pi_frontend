import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-dialog-feed-page',
  templateUrl: './dialog-feed-page.component.html',
  styleUrls: ['./dialog-feed-page.component.css'],
})
export class DialogFeedPageComponent implements OnInit {
  // public formulario: FormGroup;
  
    listaUF=[
      'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
  ];
    listaCidades={'dsa':'dsadsa'};
   
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  titulo: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;
  nomeTema:string;
  

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    // private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogFeedPageComponent>
  ) {}

  ngOnInit(): void {
   

    this.findAllPostagens();
    this.findAllTemas();
  }

  // publicarPost() {
  //   this.postagemService
  //     .postPostagem(this.formulario.value)
  //     .subscribe((result) => {});
  //   this.dialogRef.close();
  //   this.formulario.reset();
  // }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    if (
      this.postagem.postTitulo == null ||
      this.postagem.postTexto == null ||
      this.postagem.tema == null
    ) {
      alert('Preencha todos os campos antes de publicar!');
    } else {
      this.postagemService
        .postPostagem(this.postagem)
        .subscribe((resp: Postagem) => {
          this.postagem = resp;
          this.postagem = new Postagem();
          alert('Postagem realizada com sucesso!');
          this.findAllPostagens();
          this.dialogRef.close();
          
        });
    }
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  cancelar(): void {
    this.dialogRef.close();
    
    // this.formulario.reset();
  }


}
