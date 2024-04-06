

function change()

{
    let choose1= parseFloat(document.getElementById("choose1").value);
   let choose2= parseFloat(document.getElementById("choose2").value);
   let choose3 =parseFloat(document.getElementById("choose3").value);

    let total = 0;
    
    if(document.getElementById("choose1").checked)
    {
        total += choose1;
    }
    if(document.getElementById("choose2").checked)
    {
        total += choose2;
    }
    if(document.getElementById("choose3").checked)
    {
        total += choose3;
    }
    document.getElementById("totalprice").textContent = "Totalpris: " + total.toFixed(2) + " kr";
}