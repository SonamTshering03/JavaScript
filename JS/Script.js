function displayAlert() {
    alert("This is an alert");
}

function displayConfirm() {
    if(confirm("ok")) {
        document.getElementById("para_1").innerHTML = "You pressed ok";
    }
    else {
        document.getElementById("para_1").innerHTML = "You cancelled it";
    }
}

function displayPrompt() {
    let color = prompt("Please enter your favourite color: ")
        if(color != null || color != "") {
            document.getElementById("para_2").innerHTML = "You didn't enter anything.";
        }
        else {
            document.getElementById("para_2").innerHTML = "Your favourite color is" + color;
        }
}

function calculateNumbers() {
    let x = "5" + 2+3;
    document.getElementById("para_1").innerHTML = x;
}

function askNumber() {
  const num =parseInt(prompt("Enter a number from 1 to 5:"), 10);

  let text = "";
  switch (num) {
    case 1: text = "1 sheep"; break;
    case 2: text = "2 sheep"; break;
    case 3: text = "3 sheep"; break;
    case 4: text = "4 sheep"; break;
    case 5: text = "5 sheep"; break;
    default: text = "Please enter a number between 1 and 5.";
  }

  document.getElementById("result").textContent = text;
}