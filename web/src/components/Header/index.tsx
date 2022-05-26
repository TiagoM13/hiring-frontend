import { useState } from "react";
import { DropdownContent, Container } from "./styles";

import userImg from "../../assets/user.png"
import filterImg from "../../assets/filter.png"


export function Header() {
  const [active, setActive] = useState(true)

  return (
    <Container>
      <div>
        <h1>Projeto Finanças</h1>
        <button className="button-filter">
          <img src={filterImg} alt="Filtro" />
          filtrar
        </button>
      </div>
      <div>
        <button onClick={() => setActive(!active)}>
          <img src={userImg} alt="Project Finance" />
        </button>
        <div className={active ? "active" : ""}>
          <DropdownContent>
            <ul>
              <a href="#"><li>Perfil</li></a>
              <a href="#"><li>Sair</li></a>
            </ul>
          </DropdownContent>
        </div>
      </div>
    </Container>
  )
}