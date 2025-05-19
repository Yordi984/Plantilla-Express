import { DataSource } from "typeorm";
import { Estudiante } from "./entities/estudiante";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "base123",
  database: "Tienda",
  synchronize: true,
  logging: true,
  entities: [Estudiante],
  subscribers: [],
  migrations: [],
});
