import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props){
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }
    return (
        <ul className="expense-list">
            {props.items.map((expensesElement) => (
                <ExpenseItem
                    key={expensesElement.id}
                    title={expensesElement.title}
                    amount={expensesElement.amount}
                    date={expensesElement.date}
                ></ExpenseItem>
            ))}
        </ul>
    );
}
export default ExpenseList;
