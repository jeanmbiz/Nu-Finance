import { TotalMoneyStyled, ValueStyled } from "./styles";

function TotalMoney({ transactions }) {
  const valueTotal = transactions.reduce(
    (acc, va) => (va.type === "Despesa" ? acc - +va.value : acc + +va.value),
    0
  );

  return (
    <TotalMoneyStyled>
      <div className="container">
        <div className="container--valor">
          <h2 className="valor--total">Valor Total</h2>
          <ValueStyled valor={valueTotal} className="valor">
            R$ {valueTotal}
          </ValueStyled>
        </div>
        <h2 className="frase">O valor se refere ao saldo</h2>
      </div>
    </TotalMoneyStyled>
  );
}

export default TotalMoney;
