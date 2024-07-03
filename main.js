let copyleftYear = document.getElementById("currentYear");
if (copyleftYear != null) {
    copyleftYear.innerHTML = new Date().getFullYear();
}

let currentAge = document.getElementById("myAge");
if (copyleftYear != null) {
    let myDate = new Date("2007-10");
    let ageDate = new Date(Date.now() - myDate);
    currentAge.innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970);
}