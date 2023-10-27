import { Router, Request, Response } from "express";

import { validationPipe, assemblyErrorArray } from "../services/validation/validation";
import { colorInputDto } from "../dto/colors";
import getColors from "../services/colors/getColors";
import saveColor from "../services/colors/saveColor";

const router = Router();

router.get("", async (req: Request, res: Response) => {
  const colors = await getColors();
  if (colors) res.status(200).send(colors);
  else res.status(500).send({ message: "Error while retrieving colors from database." });
});

router.post("", async (req: Request, res: Response) => {
  const validationErrors = await validationPipe(colorInputDto, { ...req.body });
  if (validationErrors.length > 0) res.status(400).send({ message: "Invalid payload.", errors: assemblyErrorArray(validationErrors) });
  else {
    const registeredColors = await getColors();
    if (registeredColors?.includes(req.body.name)) res.status(400).send({ message: "Color already registered." });
    else {
      const { status, data } = await saveColor(req.body.name);
      res.status(status).send(data);
    }
  }
});

export default router;
