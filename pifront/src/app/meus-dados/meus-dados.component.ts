import { Usuario } from 'src/app/model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css'],
})
export class MeusDadosComponent implements OnInit {
  usuario: Usuario = new Usuario();
  
  idUser: number = environment.idUsuario
  nome = environment.nomeUsuario;
  email = this.usuario.usuarioEmail;
  cpf = this.usuario.usuarioDocumento;
  dataNascimento = this.usuario.usuarioNascimento;
  urlFoto = this.usuario.usuarioImagemUrl;

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit() {
    this.findUserById();
  }

  findUserById() {
    this.usuarioService.getByIdUsuario(this.idUser).subscribe((resp: any) => {
      this.usuario = resp;
    });
  }
}
