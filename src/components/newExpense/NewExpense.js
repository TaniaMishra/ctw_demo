import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseData) { 
        //The parameter will be the data collected at form submission
        const expenseData = {
            ...enteredExpenseData, 		//Break apart the fields of the object
            id: Math.random().toString()	//Every element needs a unique ID
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}
export default NewExpense;