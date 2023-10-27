import { Router, Request, Response } from "express";

import { userInputDto } from "../dto/users";
import { validationPipe, assemblyErrorArray } from "../services/validation/validation";
import saveUser from "../services/users/saveUser";

const router = Router();

router.post("", async (req: Request, res: Response) => {
  const validationErrors = await validationPipe(userInputDto, { ...req.body });
  if (validationErrors.length > 0) res.status(400).send({ message: "Invalid payload.", errors: assemblyErrorArray(validationErrors) });
  else {
    //TODO: Antes de salvar o cliente, validar a cor favorita, ela deve estar cadastrada na tabela de cores.
    const { status, data } = await saveUser(req.body);
    res.status(status).send(data);
  }
});

export default router;
