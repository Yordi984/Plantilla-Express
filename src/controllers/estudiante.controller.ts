import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Estudiante } from "../entities/estudiante";
import bcrypt from "bcrypt";

export const crearEstudiante = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      nombre,
      apellidos,
      email,
      universidad,
      carrera,
      semestre,
      intereses,
      password,
    } = req.body;

    const repo = AppDataSource.getRepository(Estudiante);

    const existente = await repo.findOne({ where: { email } });
    if (existente) {
      return res.status(409).json({ mensaje: "Correo ya registrado." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoEstudiante = repo.create({
      nombre,
      apellidos,
      email,
      universidad,
      carrera,
      semestre,
      intereses,
      password: hashedPassword,
    });

    await repo.save(nuevoEstudiante);

    return res.status(201).json({ mensaje: "Estudiante registrado con éxito" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
