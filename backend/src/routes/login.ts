import { Router } from "express";
import RepositorioUsuario from "../core/usuarios/RepositorioUsuario";

const router = Router()
const repo = new RepositorioUsuario()

router.post("/", (req, res) => {
  const { email, senha } = req.body

  if(!repo.usuarioExiste(email)) {
    res.status(204).send()
  }

  if(!repo.loginCorreto(email, senha)) {
    res.status(204).send()
  }

  res.status(200).send("Login Correto")
})

export default router