import { useEffect } from "react";
function Balance({expense, onchange})
{ 
    useEffect(()=>
    {
      // console.log('Balance Rerendered');
    },[onchange]);
    let amount=0;
    expense.forEach((eachdata)=>
    {
      amount=amount+eachdata.amount;
    });
  const style={};
   if(amount>0)
    {
      style.color="green";
    }
   else{
    style.color="red";
   }
   return (
    <>
    <h3>YOUR BALANCE</h3>
    <h2 style={style}>${amount}</h2>
    </>
   );
}
export default Balance;