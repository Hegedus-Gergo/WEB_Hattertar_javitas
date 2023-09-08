function AtviteliSebessegValtozas(){
    let ertek = document.getElementById("atviteliSebesseg").value;
    document.getElementById("atviteliSebessegSzam").innerHTML = ertek;
}

function AtviteliIdoSzamitas(){
    let atviteliMennyiseg = document.getElementById("atviteliMennyiseg").value;
    let atviteliSebesseg = document.getElementById("atviteliSebesseg").value;

    if (document.getElementById("atviteliMennyisegSelect").value == "MB") {
        atviteliMennyiseg = atviteliMennyiseg * 1000;
    }
    if (document.getElementById("atviteliMennyisegSelect").value == "GB") {
        atviteliMennyiseg = atviteliMennyiseg * 1000 * 1000; // lehetne 1000000 vagy Math.pow 1000*1000 helyett de funkciójában jó
    }
    if (document.getElementById("atviteliMennyisegSelect").value == "TB") {
        atviteliMennyiseg = atviteliMennyiseg * 1000 * 1000 * 1000; // lehetne 1000000 vagy Math.pow 1000*1000*1000 helyett de funkciójában jó
    }
// sokszor van használva a atviteliMennyisegSelect, akár lehetett volna egy változót lértehozni rá, de jól működik így is
    if (document.getElementById("atviteliSebessegSelect").value == "MB/s") {
        atviteliSebesseg = atviteliSebesseg * 1000;
    }
    if (document.getElementById("atviteliSebessegSelect").value == "GB/s") {
        atviteliSebesseg = atviteliSebesseg * 1000 * 1000; // lehetne 1000000 vagy Math.pow 1000*1000 helyett de funkciójában jó
    }
    // sokszor van használva a atviteliSebessegSelect, akár lehetett volna egy változót lértehozni rá, de jól működik így is

    let eredmeny = atviteliMennyiseg / atviteliSebesseg;
    let ora = Math.floor(eredmeny / 3600);
    let perc = Math.floor(eredmeny % 3600 / 60);
    let masodperc = Math.floor(eredmeny % 3600 % 60);

    document.getElementById("atviteliIdoSzam").innerHTML = ora + " Óra " + perc + " Perc " + masodperc + " Másodperc"; // mindig kiírja az órát és a percet is, még akkor is ha 0 az értékük
}