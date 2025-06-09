import { Test, TestingModule } from "@nestjs/testing";
import { DatasetsController } from "./datasets.controller";
import { DatasetService } from "../services/dataset.service";
import { initializeDataSource } from "../data-source";
import { NotFoundException } from "@nestjs/common";

describe("DatasetController", () => {
  let controller: DatasetsController;

  beforeEach(async () => {
    await initializeDataSource();

    const app: TestingModule = await Test.createTestingModule({
      controllers: [DatasetsController],
      providers: [DatasetService],
    }).compile();

    controller = app.get<DatasetsController>(DatasetsController);
  });

  describe("GetDataset", () => {
    it('Should return correct dividend yield for MSFT"', async () => {
      await expect(
        await controller.getDataset("CompanyMetrics", "MSFT", "dividendYield")
      ).toEqual([
        {
          ticker: "MSFT",
          exchange: "NASDAQ",
          dividendYield: 2,
        },
      ]);
    });

    it('Should return correct earnings per share and time for MSFT"', async () => {
      await expect(
        await controller.getDataset("CompanyMetrics", "MSFT", [
          "earningsPerShare",
          "time",
        ])
      ).toEqual([
        {
          ticker: "MSFT",
          exchange: "NASDAQ",
          earningsPerShare: 4.2,
          time: "2024-05-31 21:00:00.000",
        },
      ]);
    });

    it('Should return correct earnings per share and time for MSFT"', async () => {
      await expect(
        await controller.getDataset("CompanyIncome", "MSFT", [
          "fillingDate",
          "period",
          "revenue",
          "netIncome",
        ])
      ).toEqual([
        {
          ticker: "MSFT",
          exchange: "NASDAQ",
          fillingDate: "2025-05-31 21:00:00.000",
          period: "A",
          revenue: 1300000000,
          netIncome: 950000000,
        },
      ]);
    });

    it("Should return 404 if table not found.", async () => {
      await expect(
        controller.getDataset("non-existing-table", "MSFT", [
          "non-existing-field",
        ])
      ).rejects.toThrow(
        new NotFoundException(
          "Table non-existing-table does not exist in the database."
        )
      );
    });

    it("Should return 404 if data point not found.", async () => {
      await expect(
        controller.getDataset("CompanyIncome", "MSFT", ["non-existing-field"])
      ).rejects.toThrow(
        new NotFoundException(
          "Data point non-existing-field does not exist in table CompanyIncome."
        )
      );
    });

    // Since there is no logic in the controller, we don't need to test all possible datasets.
  });
});
