import ExpenseCard from '../components/ExpenseCard'

export default function Expense(){
  //const res = await fetch('http://localhost:3001/expenses')
  //const data = await res.json()
  return (
    <>
      <ExpenseCard />
      <br></br>
      <ExpenseCard />
    </>
  )
}