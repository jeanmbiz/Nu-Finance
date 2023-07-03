import Nukenzie from "../../assets/LogoBlack.svg";
import GrayButton from "../GrayButton/GrayButton";
import { HeaderStyled } from "./styles";

function Header({ setIsLogged }) {
  function logout() {
    setIsLogged(false);
  }

  return (
    <HeaderStyled>
      <div className="container">
        <h2> <span>Nu</span> <span>Finance</span></h2>

        <GrayButton action={logout} setIsLogged={setIsLogged} name="Inicio" />
      </div>
    </HeaderStyled>
  );
}

export default Header;
