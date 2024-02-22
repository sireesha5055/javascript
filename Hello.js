const x=11;
let msg ;
if (x%2==0)
{
    msg ="Even";
}
else{
    msg ="odd";

}
const mystl={
    border:'1px solid black ',
    background :'gold',
    text:'center',
}
return(
    <div>
        <h1 style ={mystl}> Status {msg}</h1>
    </div>
)