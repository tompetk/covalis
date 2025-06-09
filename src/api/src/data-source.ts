import "reflect-metadata";
import { DataSource } from "typeorm";
import { CompanyMetrics } from "./entity/CompanyMetrics";
import { CompanyProfile } from "./entity/CompanyProfile";
import { CompanyIncome, StatementPeriod } from "./entity/CompanyIncome";

export const AppDataSource = new DataSource({
  type: "sqlite", // TODO: Change to PostgreSQL in production
  database: "test.sqlite",
  synchronize: true,
  logging: false,
  entities: [CompanyMetrics, CompanyProfile, CompanyIncome],
  migrations: [],
  subscribers: [],
});

export const initializeDataSource = async () => {
  await AppDataSource.initialize()
    .then(async () => {
      console.log("Seed data is being loaded...");

      // Company Profiles
      await AppDataSource.manager.save([
        new CompanyProfile(
          "AAPL",
          "NASDAQ",
          "Apple Inc.",
          "https://www.apple.com",
          "Technology"
        ),
        new CompanyProfile(
          "GOOGL",
          "NASDAQ",
          "Alphabet Inc.",
          "https://www.google.com",
          "Technology"
        ),
        new CompanyProfile(
          "AMZN",
          "NASDAQ",
          "Amazon.com Inc.",
          "https://www.amazon.com",
          "E-commerce"
        ),
        new CompanyProfile(
          "MSFT",
          "NASDAQ",
          "Microsoft Corporation",
          "https://www.microsoft.com",
          "Technology"
        ),
        new CompanyProfile(
          "TSLA",
          "NASDAQ",
          "Tesla Inc.",
          "https://www.tesla.com",
          "Automotive"
        ),
      ]);

      // Company Metrics
      await AppDataSource.manager.save([
        new CompanyMetrics(
          "AAPL",
          "NASDAQ",
          new Date(2024, 5, 1),
          38.6,
          1.5,
          3.8
        ),
        new CompanyMetrics(
          "GOOGL",
          "NASDAQ",
          new Date(2024, 5, 1),
          45.2,
          2.1,
          4.5
        ),
        new CompanyMetrics(
          "AMZN",
          "NASDAQ",
          new Date(2024, 5, 1),
          50.3,
          1.8,
          5.0
        ),
        new CompanyMetrics(
          "MSFT",
          "NASDAQ",
          new Date(2024, 5, 1),
          42.1,
          2.0,
          4.2
        ),
        new CompanyMetrics(
          "TSLA",
          "NASDAQ",
          new Date(2024, 5, 1),
          55.0,
          2.5,
          6.0
        ),
      ]);

      // Company Income Statements
      await AppDataSource.manager.save([
        new CompanyIncome(
          "AAPL",
          "NASDAQ",
          new Date(2025, 5, 1),
          StatementPeriod.Annual,
          1000000000,
          800000000
        ),

        new CompanyIncome(
          "GOOGL",
          "NASDAQ",
          new Date(2025, 5, 1),
          StatementPeriod.Annual,
          1200000000,
          900000000
        ),

        new CompanyIncome(
          "AMZN",
          "NASDAQ",
          new Date(2025, 5, 1),
          StatementPeriod.Annual,
          1500000000,
          1100000000
        ),

        new CompanyIncome(
          "MSFT",
          "NASDAQ",
          new Date(2025, 5, 1),
          StatementPeriod.Annual,
          1300000000,
          950000000
        ),

        new CompanyIncome(
          "TSLA",
          "NASDAQ",
          new Date(2025, 5, 1),
          StatementPeriod.Annual,
          1600000000,
          1200000000
        ),

        new CompanyIncome(
          "AAPL",
          "NASDAQ",
          new Date(2025, 3, 1),
          StatementPeriod.Quarterly,
          250000000,
          200000000
        ),

        new CompanyIncome(
          "GOOGL",
          "NASDAQ",
          new Date(2025, 3, 1),
          StatementPeriod.Quarterly,
          300000000,
          220000000
        ),
      ]);

      console.log("Seed data loaded successfully. Database is ready to use.");
    })
    .catch((error) => console.log(error));
};
