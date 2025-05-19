import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: "varchar", length: 13, unique: true })
  rfc: string;

  @Column({ type: "varchar", length: 50 })
  sector: string;

  @Column()
  nombre_representante: string;

  @Column()
  cargo_representante: string;

  @Column({ unique: true })
  correoEmpresa: string;

  @Column()
  telefonoEmpresa: number;

  // Seguridad
  @Column()
  passwordHash: string;

  @Column()
  aceptaTerminos: boolean;

  @Column()
  deseaNewsletter: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
