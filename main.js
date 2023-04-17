let result = document.getElementById("result");
function number(elem) {
  if (result.value === "0" || result.value === "00"){
    result.value = elem.value
  } else {
    result.value += elem.value;
  }
}

function all_clear() {
  result.value = "" ;
}

function calc() {
  result.value = eval(result.value)
}

function edit(elem) {

  if (result.value.slice(-1) === "+" ){
    return;
  } else if (result.value.slice(-1) === "-" ){
    return;
  } else if (result.value.slice(-1) === "*" ){
    return;
  } else if (result.value.slice(-1) === "/" ){
    return;
  } else {
    result.value += elem.value;
  }
}

