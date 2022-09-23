import { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import List from "../List/List";
import TotalMoney from "../TotalMoney/TotalMoney";
import { DashboardStyled } from "./styles";

function Dashboard({ setIsLogged }) {
  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      <Header setIsLogged={setIsLogged} />

      <DashboardStyled className="container">
        <div className="form--total">
          <Form setTransactions={setTransactions} />
          <TotalMoney transactions={transactions} />
        </div>

        <List setTransactions={setTransactions} transactions={transactions} />
      </DashboardStyled>
    </div>
  );
}

export default Dashboard;
