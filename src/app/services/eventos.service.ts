import { Injectable } from '@angular/core';
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular';
const QUERY_ALL = gql`
{
  eventos {
    id
    titulo
    descripcion
  }
}
`


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(

    private apollo: Apollo

  ) { }

  public async getAllEventos() {

    const query = await this.apollo.query({
      query: QUERY_ALL
    })

    return (await query.toPromise()).data

  }
}
