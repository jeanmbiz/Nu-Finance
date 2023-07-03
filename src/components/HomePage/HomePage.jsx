import { Home } from "./styles";
import logo from "../../assets/LogoWhite.svg";
import imagem from "../../assets/HomeImage.svg";
import { ImgHome } from "./styles";
import PinkButton from "../PinkButton/PinkButton";

function HomePage({ setIsLogged }) {
  function login() {
    setIsLogged(true);
  }

  return (
    <Home>
      <div>
        <h2> <span>Nu</span> <span>Finance</span></h2>

        <h1>Centralize o controle das suas financas</h1>

        <h3> de forma rápida e segura</h3>

        <PinkButton action={login} name="Iniciar" width={240} />
      </div>

      <ImgHome className="imagem" src={imagem} alt="" />
    </Home>
  );
}

export default HomePage;
