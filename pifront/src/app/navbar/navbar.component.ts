import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  idUser: number;
  nomeUser: string;
  fotoUrlUser: string;


  constructor(
    public auth: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let token = environment.token

    this.idUser = environment.idUsuario;
    this.nomeUser = environment.nomeUsuario;
    this.fotoUrlUser = environment.fotoUrlUsuario;

    this.findUserById();
  }

  sair() {
    this.router.navigate(['/login'])
    environment.token = ''
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
