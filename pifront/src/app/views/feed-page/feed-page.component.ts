import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFeedPageComponent } from './dialog-feed-page/dialog-feed-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/Usuario';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css'],
})
export class FeedPageComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  idUser: number;
  nomeUser: string;
  fotoUrlUser: string;

  key = 'data';
  reverse = true;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  titulo: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;
  nomeTema:string;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let token = environment.token;
    this.idUser = environment.idUsuario;
    this.nomeUser = environment.nomeUsuario;
    this.fotoUrlUser = environment.fotoUrlUsuario;

    this.findUserById();
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(DialogFeedPageComponent, {
      minWidth: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  findUserById() {
    this.usuarioService.getByIdUsuario(this.idUser).subscribe((resp: any) => {
      this.usuario = resp;
      this.idUser = this.usuario.id;
      this.nomeUser = this.usuario.usuarioNome;
      this.fotoUrlUser = this.usuario.usuarioImagemUrl;
    });
  }
}
