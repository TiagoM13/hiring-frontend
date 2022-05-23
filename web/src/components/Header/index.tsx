import { ButtonDropdown, Container } from "./styles";

import userImg from "../../assets/user.png"
import { useState } from "react";

export function Header() {
  const [active, setActive] = useState(true)

  return (
    <Container>
      <h1>Projeto Finanças</h1>
      <div>
        <button onClick={() => setActive(!active)}>
          <img src={userImg} alt="Project Finance" />
        </button>
        <div className={active ? "active" : ""}>
          <ButtonDropdown>
            <ul>
              <a href="#"><li>Perfil</li></a>
              <a href="#"><li>Sair</li></a>
            </ul>
          </ButtonDropdown>
        </div>
      </div>
    </Container>
  )
}