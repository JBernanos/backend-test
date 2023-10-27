import { Router, Request, Response } from "express";

import { userDto } from "../dto/users";
import { validationPipe, assemblyErrorArray } from "../services/validation/validation";

const router = Router();

router.post("", async (req: Request, res: Response) => {
  const validationErrors = await validationPipe(userDto, { ...req.body });
  if (validationErrors.length > 0) res.status(400).send({ message: "Invalid payload.", errors: assemblyErrorArray(validationErrors) });
  else {
    //TODO: Salvar usuário no banco de dados.
    res.status(201).send({ message: "User created." });
  };
});

export default router;
