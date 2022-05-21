import { Container } from "./styles";

import userImg from "../../assets/user.png"

export function Header() {
  return (
    <Container>
      <h1>Project Finance</h1>
      <div>
        <img src={userImg} alt="Project Finance" />
      </div>
    </Container>
  )
}