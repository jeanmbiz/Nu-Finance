import GrayButton from "../GrayButton/GrayButton";
import { FaTrash } from "react-icons/fa";
import { CardStyled, ListStyled } from "./styles";
import { useState } from "react";

function List({ transactions, setTransactions }) {
  const [filtered, setFiltered] = useState("");

  function entryFilter() {
    const entryTransactions = transactions.filter(
      (transaction) => transaction.type === "Entrada" && transaction
    );
    setFiltered(entryTransactions);
  }

  function expensesFilter() {
    const expensiveTransactions = transactions.filter(
      (transaction) => transaction.type === "Despesa" && transaction
    );
    setFiltered(expensiveTransactions);
  }

  function all() {
    setFiltered("");
  }

  function trash(clicado) {
    setTransactions(
      transactions.filter((transaction) => transaction.description !== clicado)
    );
  }

  return (
    <ListStyled>
      <div className="container--filter">
        <h2 className="text">Resumo Financeiro</h2>
        <nav className="container--nav">
          <GrayButton action={all} name="Todos" />
          <GrayButton action={entryFilter} name="Entradas" />
          <GrayButton action={expensesFilter} name="Despesas" />
        </nav>
      </div>

      <ul className="container">
        {filtered === ""
          ? transactions.map((transaction, index) => (
              <CardStyled colortype={transaction.type} key={index}>
                <div className="text--div">
                  <h2 className="description">{transaction.description}</h2>
                  <h2 className="type">{transaction.type}</h2>
                </div>
                <div className="value--div">
                  <h2 className="value">R$ {transaction.value}</h2>
                  <div
                    onClick={() => trash(transaction.description)}
                    className="div--trash"
                  >
                    <FaTrash className="trash" />
                  </div>
                </div>
              </CardStyled>
            ))
          : filtered.map((transaction, index) => (
              <CardStyled colortype={transaction.type} key={index}>
                <div className="text--div">
                  <h2 className="description">{transaction.description}</h2>
                  <h2 className="type">{transaction.type}</h2>
                </div>
                <div className="value--div">
                  <h2 className="value">R$ {transaction.value}</h2>
                  <div
                    onClick={() => trash(transaction.description)}
                    className="div--trash"
                  >
                    <FaTrash className="trash" />
                  </div>
                </div>
              </CardStyled>
            ))}
      </ul>
    </ListStyled>
  );
}

export default List;
