import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Bỏ qua CORS nếu cần
  await app.listen(3002);
}
bootstrap();