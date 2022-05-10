import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem.js";
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

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expensesElement) => (
            <ExpenseItem
                title={expensesElement.title}
                amount={expensesElement.amount}
                date={expensesElement.date}
                key={expensesElement.id}
            ></ExpenseItem>
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {expensesContent}
        </Card>
    );
}
export default Expenses;
