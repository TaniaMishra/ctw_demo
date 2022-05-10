import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "../components/newExpense/ExpensesFilter.js"
import Card from "./Card.js";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }  

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {props.items.map((expensesElement, index) => (
                <ExpenseItem
                    title={expensesElement.title}
                    amount={expensesElement.amount}
                    date={expensesElement.date}
                    key={index}
                ></ExpenseItem>
            ))}
        </Card>
    );
}
export default Expenses;
