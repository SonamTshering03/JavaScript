function showTable() {
    let n = document.getElementById("num").value;
    let result = "";

    for (let i = 1; i <= 10; i++) {
    result += n + " × " + i + " = " + (n * i) + "<br>";
    }
    document.getElementById("output").innerHTML = result;
}