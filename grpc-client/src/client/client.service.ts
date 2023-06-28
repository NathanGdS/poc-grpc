import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ClientService } from './interfaces/hero.interfaces';

@Injectable()
export class ClientGrpcService implements OnModuleInit {
  private clientService: ClientService;

  constructor(@Inject('CLIENT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.clientService = this.client.getService<ClientService>('ClientService');
  }

  getHero(): Observable<string> {
    return this.clientService.findOne({ id: 1 });
  }
}
