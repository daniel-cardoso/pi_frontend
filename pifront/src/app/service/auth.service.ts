import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
    return this.http.get(`http://localhost:8080/usuario/titulo/${id}`, this.token)
  }

  /*@GetMapping("/{id}")
	public ResponseEntity<Usuario> GetById(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}*/ 

}