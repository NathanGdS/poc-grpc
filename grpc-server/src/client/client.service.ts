import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Injectable } from '@nestjs/common';
import { Client, ClientById } from './interfaces/hero.interfaces';

@Injectable()
export class ClientService {
  findOne(
    data: ClientById,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Client {
    const items = [
      { id: 1, name: 'Nathan' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
