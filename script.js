function convert(degree) {
  var x;
  if (degree == "C") {
    x = document.getElementById("c").value * 9 / 5 + 32;
    document.getElementById("f").value = x;
    alert("Temperature in Fahrenheit is "+x);
  } else {
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value = x;
     alert("Temperature in Celsius is "+x);
    }
}

