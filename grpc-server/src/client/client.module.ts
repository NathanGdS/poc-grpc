import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  // imports: [
  //   ClientsModule.register([
  //     {
  //       name: 'CLIENT_PACKAGE',
  //       transport: Transport.GRPC,
  //       options: {
  //         url: 'localhost:50051',
  //         package: 'client',
  //         protoPath: join(__dirname, './client.proto'),
  //       },
  //     },
  //   ]),
  // ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
