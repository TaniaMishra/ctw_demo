import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "../components/newExpense/ExpensesFilter.js"
import Card from "./Card.js";

function Expenses(props) {
    function filterChangeHandler(selectedYear) {
        console.log("In Expenses");
        console.log(selectedYear);
    }  

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterChange={filterChangeHandler}></ExpensesFilter>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem>
        </Card>
    );
}
export default Expenses;
