import Senha from "../shared/Senha";
import { Usuario } from "./Usuario";

export default class RepositorioUsuario {
  usuarios: Usuario[] = [
    new Usuario("admin@admin.com", "123456"),
    new Usuario("user@user.com", "123456"),
    new Usuario("user2@user2.com", "123456"),
  ]

  encontrarIndice(email: string) {
    const indice = this.usuarios.findIndex(usuario => usuario.email === email)
    return indice
  }

  usuarioExiste(email: string) {
    return this.encontrarIndice(email) >= 0
  }

  loginCorreto(email: string, senha: string) {
    const indice = this.encontrarIndice(email)
    const senhaCorreta = Senha.comparar(senha, this.usuarios[indice]?.senha)

    return senhaCorreta
  }
}