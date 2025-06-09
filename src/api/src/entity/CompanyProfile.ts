import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class CompanyProfile {
  @PrimaryColumn()
  ticker: string;

  @PrimaryColumn()
  exchange: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  industry: string;

  constructor(
    ticker: string,
    exchange: string,
    name: string,
    url: string,
    industry: string
  ) {
    this.ticker = ticker;
    this.exchange = exchange;
    this.name = name;
    this.url = url;
    this.industry = industry;
  }
}
