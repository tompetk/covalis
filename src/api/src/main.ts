import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import "reflect-metadata";
import { initializeDataSource } from "./data-source";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  await initializeDataSource();

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Covalis Datasets API")
    .setVersion("1.0")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
