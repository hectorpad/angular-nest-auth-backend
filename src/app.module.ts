import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'; 

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), //PARA USAR VARIABLES DE ENTORNO

    MongooseModule.forRoot(process.env.MONGO_URI,{
      dbName: process.env.MONGO_DB_NAME
    }), //PARA CONECTARME A LA BD DE MONGO

    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  

}
