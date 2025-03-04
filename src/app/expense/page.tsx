"use-client";
import { ThemeProvider } from '@material-tailwind/react'
import ExpenseList from '../components/ExpenseList'

export default function Expense(){
  //const res = await fetch('http://localhost:3001/expenses')
  //const data = await res.json()
  return (
    <ExpenseList />
  )
}