import { Module } from "@nestjs/common";
import { DatasetsController } from "./controllers/datasets.controller";
import { DatasetService } from "./services/dataset.service";

@Module({
  imports: [],
  controllers: [DatasetsController],
  providers: [DatasetService],
})
export class AppModule {}
