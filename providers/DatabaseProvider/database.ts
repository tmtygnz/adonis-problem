import { PrismaClient } from "@prisma/client";

export default class Database {
  protected DB: PrismaClient;
  constructor() {
    this.DB = new PrismaClient();
  }
}
