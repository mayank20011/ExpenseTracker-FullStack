function UpdateButton()
{
  function updatetransaction()
  {
    console.log('Update');
  }
   return (
    <div>
      <button onClick={updatetransaction}><i class="fa-regular fa-pen-to-square"></i></button>
    </div>
   );
}
export default UpdateButton;