import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

function NewExpense(){
    function saveExpenseDataHandler(enteredExpenseData) { 
        //The parameter will be the data collected at form submission
        const expenseData = {
            ...enteredExpenseData, 		//Break apart the fields of the object
            id: Math.random().toString()	//Every element needs a unique ID
        };
        console.log(expenseData);		//Display to the screen to make sure it works.
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}
export default NewExpense;