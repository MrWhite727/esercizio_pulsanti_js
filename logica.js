const DIM_DIV = 800; //deve essere la stessa nel file CSS

function genera()
{
    var stringa = "";
    var input = document.getElementById("num");
    var nPul = parseInt(input.value);
    var nRig = Math.ceil(Math.sqrt(nPul));
    var dimPul = parseInt(DIM_DIV / nRig);
    var tot = 0
    var rig;
    while(tot < nPul)
    {
        rig = 0;
        while(rig < nRig && tot < nPul)
        {
            stringa += "<input type='button' style='width: " + dimPul + "px; aspect-ratio: 1 / 1;'>";    
            tot++;
            rig++;
        }
        stringa += "<br>";
    }
    document.getElementById("area").innerHTML = stringa;
}