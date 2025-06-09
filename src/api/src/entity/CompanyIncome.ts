import { Entity, Column, PrimaryColumn } from "typeorm";

export enum StatementPeriod {
  Annual = "A",
  Quarterly = "Q",
}

@Entity()
export class CompanyIncome {
  @PrimaryColumn()
  ticker: string;

  @PrimaryColumn()
  exchange: string;

  @PrimaryColumn()
  fillingDate: Date;

  @Column()
  period: StatementPeriod;

  @Column()
  revenue: number;

  @Column()
  netIncome: number;

  constructor(
    ticker: string,
    exchange: string,
    fillingDate: Date,
    period: StatementPeriod,
    revenue: number,
    netIncome: number
  ) {
    this.ticker = ticker;
    this.exchange = exchange;
    this.fillingDate = fillingDate;
    this.period = period;
    this.revenue = revenue;
    this.netIncome = netIncome;
  }
}
