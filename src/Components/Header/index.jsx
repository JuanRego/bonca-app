import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import { HeaderStyle } from "./style";

const Header = () => {
  const { user } = useState(false);

  return (
    <HeaderStyle>
      <div className="header-holder">
        <Logo />
        <Link className="link-menu" to="">
          Posts
        </Link>
        <div className="divider"></div>
        <Link className="link-menu" to="">
          Eventos
        </Link>
        <div className="divider"></div>
        <Link className="link-menu" to="">
          Grupos
        </Link>

        <div className="login-menu-holder text-border">
          {user === true ? (
            <div></div>
          ) : (
            <div className="login-menu">
              <Link to="/login">ENTRAR</Link>
              <Link to="/cadastro">CADASTRAR</Link>
            </div>
          )}
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
