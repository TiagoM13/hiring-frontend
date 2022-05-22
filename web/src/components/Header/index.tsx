import { Container } from "./styles";

import userImg from "../../assets/user.png"

export function Header() {
  return (
    <Container>
      <h1>Projeto Finanças</h1>
      <button>
        <img src={userImg} alt="Project Finance" />
      </button>
    </Container>
  )
}