import Senha from "../shared/Senha"

export  class Usuario {
  email: string
  senha: string

  constructor(email: string, senha: string) {
    this.email = email
    this.senha = Senha.criptrografar(senha)
  }
}