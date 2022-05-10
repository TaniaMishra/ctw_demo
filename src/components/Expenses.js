import React, {useState} from "react";
import ExpenseList from "./ExpenseList.js"
import ExpensesChart from './ExpensesChart.js';
import ExpensesFilter from "../components/newExpense/ExpensesFilter.js"
import Card from "./Card.js";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filteredExpenses = props.items.filter(expenses =>{
        return expenses.date.getFullYear().toString() === filteredYear;
      });

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesChart expenses={props.items}></ExpensesChart>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    );
}
export default Expenses;
