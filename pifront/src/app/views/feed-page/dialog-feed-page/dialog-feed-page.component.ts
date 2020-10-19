import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PostagemService } from 'src/app/service/postagem.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-dialog-feed-page',
  templateUrl: './dialog-feed-page.component.html',
  styleUrls: ['./dialog-feed-page.component.css'],
})
export class DialogFeedPageComponent implements OnInit {
  public formulario: FormGroup;

  constructor(
    private postagemService: PostagemService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogFeedPageComponent>
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      //validators.required = not null (obrigatório)
      postTitulo: ['', [Validators.required]],
      postTexto: ['', [Validators.required]],
      postEstado: ['', [Validators.required]],
      postCidade: ['', [Validators.required]],
      postEndereco: ['', [Validators.required]],
      postUrl: ['', [Validators.required]],
      postImagem: ['', [Validators.required]],
    });
  }

  publicar() {
    this.postagemService
      .postPostagem(this.formulario.value)
      .subscribe((result) => {});
    this.dialogRef.close();
    this.formulario.reset();
  }

  cancelar(): void {
    this.dialogRef.close();
    this.formulario.reset();
  }
}
