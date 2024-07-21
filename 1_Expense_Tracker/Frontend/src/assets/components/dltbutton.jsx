import "./dltbutton.css";
function DltBtn({id, dltItem})
{
  function dltdata(e)
  {
    dltItem(e);
  }
  return <div className="dltbtn" id={id} onClick={dltdata} >X</div>
}
export default DltBtn;