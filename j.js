var x=document.getElementById("calc");
function display(num){
x.value +=num;
}
function Clear(){
    x.value="";
}
function Delete(){
    x.value=x.value.slice(0,-1);
}
function calc(){
    try{
       x.value= eval(x.value);
    }
    catch(error)
    {
        x.value="Error"
    }
}