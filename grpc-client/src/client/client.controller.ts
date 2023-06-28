/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientGrpcService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientGrpcService) {}
  @Get()
  findOne(): Observable<any> {
    return this.clientService.getHero();
  }
}
