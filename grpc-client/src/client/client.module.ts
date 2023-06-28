import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ClientController } from './client.controller';
import { ClientGrpcService } from './client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50051',
          package: 'client',
          protoPath: join(__dirname, './client.proto'),
        },
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientGrpcService],
})
export class ClientModule {}
