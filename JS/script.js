function hitungluas()
{
    let sisiluas = document.getElementById("sisiluas").value  
    if (sisiluas == ""){
        alert("Silahkan mengisi nilai sisi terlebih dahulu");
    }
    else {                                 
    document.getElementById("rumus-luas").innerHTML = "&emsp; L = S x S";                                             
    document.getElementById("perhitungan-luas").innerHTML = "&emsp; L = " + sisiluas + " x " + sisiluas;
    document.getElementById("output_luas").innerHTML = "&emsp; L = " + sisiluas * sisiluas;
    }
}                                                                                                                                                       

function hitungkeliling()
{
    let sisikeliling = document.getElementById("sisikeliling").value
    let nilai = 4
    if (sisikeliling == ""){
        alert("Silahkan mengisi nilai sisi terlebih dahulu");
    }
    else {
    document.getElementById("rumus-keliling").innerHTML = "&emsp; K = 4 x S";
    document.getElementById("perhitungan-keliling").innerHTML = "&emsp; K = " + 4 +" x "+ sisikeliling;
    document.getElementById("output_keliling").innerHTML = "&emsp; K = " + sisikeliling * nilai;
    }
}

function resetluas()
{
    document.getElementById("sisiluas").value = "";
    document.getElementById("rumus-luas").innerHTML = "";
    document.getElementById("perhitungan-luas").innerHTML = "";
    document.getElementById("output_luas").innerHTML = "";
} 

function resetkeliling()
{
    document.getElementById("sisikeliling").value = "";
    document.getElementById("rumus-keliling").innerHTML = "";
    document.getElementById("perhitungan-keliling").innerHTML = "";
    document.getElementById("output_keliling").innerHTML = "";
}  