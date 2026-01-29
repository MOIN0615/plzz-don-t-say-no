function unlock() {
  const pwd = document.getElementById("password").value;
  if (pwd === "1402") { // change password
    document.getElementById("love").style.display = "block";
  } else {
    alert("Wrong code 😜");
  }
}

const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

document.getElementById("yes").onclick = () => {
  alert("Forever starts now 😍❤️");
};
