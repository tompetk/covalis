import { Controller, Get, Param, Query } from "@nestjs/common";
import { DatasetService } from "../services/dataset.service";

@Controller()
export class DatasetsController {
  constructor(private readonly datasetsService: DatasetService) {}

  @Get("datasets/:tableName")
  async getDataset(
    @Param("tableName") tableName: string,
    @Query("ticker") ticker: string,
    @Query("dataPointNames") dataPointNames: string | string[]
  ) {
    // TODO: paging support?
    // TODO: authentication?

    return this.datasetsService.query(
      tableName,
      ticker,
      Array.isArray(dataPointNames)
        ? dataPointNames
        : (dataPointNames = [dataPointNames])
    );
  }
}
