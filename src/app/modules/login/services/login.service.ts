import { Injectable } from '@angular/core';
import gql from "graphql-tag";
import { Apollo } from 'apollo-angular';
import { UserWeb } from '../../../models/UserWeb';
import { DomSanitizer } from '@angular/platform-browser';

const LOGIN = gql`
query iniciarSesion($user: String!, $password: String!) {
  login(username: $user, password: $password) {
    username
    persona {
      id
      primerNombre
      segundoNombre
      primerApellido
      segundoApellido
      Foto
    }
  }
}

`


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apollo: Apollo,
    private sanitized: DomSanitizer
  ) { }

  public async login(username: string, password: string): Promise<UserWeb> {
    const query = await this.apollo.query(
      {
        query: LOGIN,
        variables: {
          user: username,
          password: password
        },
        fetchPolicy: 'network-only'
      }
    )
    try {
      const result = await query.toPromise();
      const user = result.data['login'] as UserWeb;

      this.LOGIN(user)


      this.sanitized.bypassSecurityTrustHtml(user.persona.Foto)
      return user;
    } catch (error) {
      //console.log(error);
      return null;
    }


  }


  private LOGIN(user: UserWeb) {

    if (user != null) {
      localStorage.setItem('currentUser', JSON.stringify(user))
    }

  }

  public LOGOUT() {
    localStorage.setItem('currentUser', null);
  }

  public getCurrentUser() {
    const user: UserWeb = JSON.parse(localStorage.getItem('currentUser'))

    return user;

  }


}


//ng g service modules/login/services/login --spec=false

