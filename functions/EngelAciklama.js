export const AciklamaGoster = () => {
    var engeldurum = document.getElementById("engel").value;
    var aciklamaDiv = document.getElementById("aciklamaDiv");
    var icerik = document.getElementsByClassName("icerik");
  
    if (engeldurum == "var") {
      icerik.innerHTML = engeldurum;
      if (aciklamaDiv) {
        aciklamaDiv.style.display = "block";
      }
    } else {
      icerik.innerHTML = engeldurum;
      if (aciklamaDiv) {
        aciklamaDiv.style.display = "none";
      }
      icerik.style.display = "none";
    }
  };
  