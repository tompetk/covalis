import { Injectable, NotFoundException } from "@nestjs/common";
import { AppDataSource } from "../data-source";

@Injectable()
export class DatasetService {
  constructor() {}

  async query(
    tableName: string,
    ticker: string,
    dataPointNames: string[]
  ): Promise<any[]> {
    //
    // Query is routed directly to TypeORM with no need for an extra logic or custom router.

    if (!AppDataSource.hasMetadata(tableName))
      throw new NotFoundException(
        `Table ${tableName} does not exist in the database.`
      );

    const repository = AppDataSource.getRepository(tableName);
    dataPointNames.forEach((name) => {
      if (!repository.metadata.hasColumnWithPropertyPath(name)) {
        throw new NotFoundException(
          `Data point ${name} does not exist in table ${tableName}.`
        );
      }
    });

    const results = await repository
      .createQueryBuilder(tableName)
      .where({
        ticker: ticker,
      })
      .select(dataPointNames)
      .addSelect(`ticker`)
      .addSelect(`exchange`)
      .getRawMany();

    // TODO: consider mapping to typed DTOs instead of returning raw results for better type safety and swagger docs.

    return results;
  }
}
