import { Router } from "express";
import { crearEstudiante } from "../controllers/estudiante.controller";

const router = Router();

router.post("/estudiante", crearEstudiante);

export default router;
