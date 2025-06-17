import bcrypt from "bcrypt"

export default class Senha {
  static criptrografar(senha: string) {
    const senhaCriptrografada = bcrypt.hashSync(senha, 5)
    return senhaCriptrografada
  }

  static comparar(senha: string, senhaCriptrografada: string) {
    const senhasIguais = bcrypt.compareSync(senha, senhaCriptrografada)
    return senhasIguais
  }
}