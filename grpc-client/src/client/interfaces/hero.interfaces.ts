import { Observable } from 'rxjs';

export interface Client {
  id: number;
  name: string;
}

export interface ClientById {
  id: number;
}

export interface ClientService {
  findOne(data: { id: number }): Observable<any>;
}
