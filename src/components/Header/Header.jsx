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
        <img src={Nukenzie} alt="" />

        <GrayButton action={logout} setIsLogged={setIsLogged} name="Inicio" />
      </div>
    </HeaderStyled>
  );
}

export default Header;
