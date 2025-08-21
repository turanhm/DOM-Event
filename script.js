const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("plus").addEventListener("click", () => {
  result.value = Number(num1.value) + Number(num2.value);
});

document.getElementById("minus").addEventListener("click", () => {
  result.value = Number(num1.value) - Number(num2.value);
});

document.getElementById("mult").addEventListener("click", () => {
  result.value = Number(num1.value) * Number(num2.value);
});

document.getElementById("divide").addEventListener("click", () => {
  if (Number(num2.value) === 0) {
    result.value = "0-a bölmək olmaz!";
  } else {
    result.value = Number(num1.value) / Number(num2.value);
  }
});
