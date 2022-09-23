import { Button } from "./styles";

function PinkButton({ name, width, action }) {
  return (
    <Button onClick={() => action()} width={width}>
      {name}
    </Button>
  );
}

export default PinkButton;
