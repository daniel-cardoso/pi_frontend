import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuario/cadastrar', usuario)
  }

  btnSair(){
    let ok = false
    let token = environment.token

    if (token != '') {
      ok = true
    }

    return ok
  }

  btnLogin() {
    let ok = false
    let token = environment.token

    if (token == '') {
      ok = true
    }

    return ok
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/usuario/${id}`, this.token)
  }

  getAllUsuario(){
    return this.http.get(`http://localhost:8080/usuario`, this.token)
  }
  //
   

  

}