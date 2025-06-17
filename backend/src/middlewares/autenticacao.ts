import jwt from "jsonwebtoken"

export default function verificaToken(req: any, res: any, next: any) {
  const headerAuth = req.headers["authorization"]
  const token = headerAuth?.split(" ")[1]

  if (!token) {
    res.status(401).send()
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as "Secret", (err: any) => {
    if (err) {
      res.status(403).send()
    }
  })

  next()
}