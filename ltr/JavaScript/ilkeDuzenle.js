function validateAndSaveAll() {
  var isim = document.getElementById("isim").value.trim();
  var uyari = document.getElementById("isimUyari");
  if (!isim) {
    uyari.style.display = "block";
    document.getElementById("isim").focus();
    return false;
  } else {
    uyari.style.display = "none";
    saveAll();
  }
}
