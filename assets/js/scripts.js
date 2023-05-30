function media() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;

    var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

    result.innerHTML = media.toFixed(1);
}
