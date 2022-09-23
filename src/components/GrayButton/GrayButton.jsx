import { Button } from "./styles";

function GrayButton({ name, action }) {
  return <Button onClick={() => action()}>{name}</Button>;
}

export default GrayButton;
