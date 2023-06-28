/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ClientService } from './client.service';
import { Client, ClientById } from './interfaces/hero.interfaces';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @GrpcMethod('ClientService', 'FindOne')
  findOne(
    data: ClientById,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Client {
    return this.clientService.findOne(data, metadata, call);
  }
}
