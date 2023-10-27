import { Router, Request, Response } from "express";

import { validationPipe, assemblyErrorArray } from "../services/validation/validation";
import { userInputDto } from "../dto/users";
import saveUser from "../services/users/saveUser";
import getColors from "../services/colors/getColors";

const router = Router();

router.post("", async (req: Request, res: Response) => {
  const validationErrors = await validationPipe(userInputDto, { ...req.body });
  if (validationErrors.length > 0) res.status(400).send({ message: "Invalid payload.", errors: assemblyErrorArray(validationErrors) });
  else {
    const registeredColors = await getColors();
    if (!registeredColors?.includes(req.body.favorite_color)) {
      res.status(400).send({ message: `Invalid favorite_color, avaliable options are: ${registeredColors}` });
    } else {
      const { status, data } = await saveUser(req.body);
      res.status(status).send(data);
    }
  }
});

export default router;
