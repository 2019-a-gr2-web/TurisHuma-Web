import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParser = require('cookie-parser');
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from 'path';
import * as express from 'express';
import * as path from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestExpressApplication;

  app.set('view engine','ejs');
  app.setBaseViewsDir(join(__dirname,'..','views'));
  await app.listen(3002);

}
bootstrap();
