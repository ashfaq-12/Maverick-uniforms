let val= 0;

function addtocart(){
    val++;
    document.getElementById("cart").innerHTML=val;
    function addtocartbtn(){
        val++;
        document.getElementById("cart").innerHTML=val;
    
    }

}
function removetocart(){
    val--;
    document.getElementById("cart").innerHTML=val;
    if(val<1){
        document.getElementById("dis").disabled=true;
    }
}



