import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) { 
        //The parameter will be the data collected at form submission
        const expenseData = {
            ...enteredExpenseData, 		//Break apart the fields of the object
            id: Math.random().toString()	//Every element needs a unique ID
        };
        props.onAddExpense(expenseData);
    }
    function startEditingHandler() {
        setIsEditing(true);
    }

    return(
        <div className='new-expense'>
            {isEditing ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
            ):(
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
        </div>
    );
}
export default NewExpense;