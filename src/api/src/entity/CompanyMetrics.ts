import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class CompanyMetrics {
  @PrimaryColumn()
  ticker: string;

  @PrimaryColumn()
  exchange: string;

  @PrimaryColumn()
  time: Date;

  @Column()
  priceEarningsRatio: number;

  @Column()
  dividendYield: number;

  @Column()
  earningsPerShare: number;

  constructor(
    ticker: string,
    exchange: string,
    time: Date,
    priceEarningsRatio: number,
    dividendYield: number,
    earningsPerShare: number
  ) {
    this.ticker = ticker;
    this.exchange = exchange;
    this.time = time;
    this.priceEarningsRatio = priceEarningsRatio;
    this.dividendYield = dividendYield;
    this.earningsPerShare = earningsPerShare;
  }
}
