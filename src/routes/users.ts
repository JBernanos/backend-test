import { Router, Request, Response } from "express";

import { userDto } from "../dto/users";
import { validationPipe, assemblyErrorArray } from "../services/validation/validation";
import saveCustomer from "../services/customers/saveCustomer";

const router = Router();

router.post("", async (req: Request, res: Response) => {
  const validationErrors = await validationPipe(userDto, { ...req.body });
  if (validationErrors.length > 0) res.status(400).send({ message: "Invalid payload.", errors: assemblyErrorArray(validationErrors) });
  else {
    try {
      await saveCustomer(req.body);
      res.status(201).send({ message: "User created." });
    } catch (error) {
      console.log(`(ERROR) - While saving user in database: ${error}`);
      res.status(500).send({ message: "Error while saving user in database." });
    }
  }
});

export default router;
