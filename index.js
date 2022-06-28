var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const button = document.getElementById('buton');
const beden = document.getElementById('beden');

buton.addEventListener("click", function() {
  const boy = Number(document.getElementById('boy').value);
  const kilo = Number(document.getElementById('kilo').value);
  if (boy < 160) {
    beden.innerHTML = "Maalesef uygun bir beden bulamadık. <br> Farklı bir değer girerek tekrar deneyebilirsiniz.";
  }

  else if (160 <= boy && boy <= 165) {
    if (kilo < 40 || kilo > 90) {
      beden.innerHTML = "Maalesef uygun bir beden bulamadık. <br> Farklı bir değer girerek tekrar deneyebilirsiniz.";
    }
    else if (39.9 < kilo && kilo < 45.1) {
      beden.innerHTML = "Bedeniniz: 34/XS";
    }
    else if (45 < kilo && kilo <= 55) {
      beden.innerHTML = "Bedeniniz: 36/S";
    }
    else if (55 < kilo && kilo <= 60) {
      beden.innerHTML = "Bedeniniz: 38/M";
    }
    else if (60 < kilo && kilo <= 70) {
      beden.innerHTML = "Bedeniniz: 40/L";
    }
    else if (70 < kilo && kilo <= 75) {
      beden.innerHTML = "Bedeniniz: 42/XL";
    }
    else if (75 < kilo && kilo <= 80) {
      beden.innerHTML = "Bedeniniz: 44/XXL";
    }
    else if (80 < kilo && kilo <= 90) {
      beden.innerHTML = "Bedeniniz: 46/XXXL";
    }
  }

  else if (166 <= boy && boy <= 170) {
    if (kilo < 40 || kilo > 90) {
      beden.innerHTML = "Maalesef uygun bir beden bulamadık. <br> Farklı bir değer girerek tekrar deneyebilirsiniz.";
    }
    else if (40 <= kilo && kilo <= 45) {
      beden.innerHTML = "Bedeniniz: 34/XS";
    }
    else if (45 < kilo && kilo <= 60) {
      beden.innerHTML = "Bedeniniz: 36/S";
    }
    else if (60 < kilo && kilo <= 65) {
      beden.innerHTML = "Bedeniniz: 38/M";
    }
    else if (65 < kilo && kilo <= 75) {
      beden.innerHTML = "Bedeniniz: 40/L";
    }
    else if (75 < kilo && kilo <= 80) {
      beden.innerHTML = "Bedeniniz: 42/XL";
    }
    else if (80 < kilo && kilo <= 90) {
      beden.innerHTML = "Bedeniniz: 44/XXL";
    }
  }

  else if (171 <= boy && boy <= 180) { // buradasın!!!!
    if (kilo < 50 || kilo > 90) {
      beden.innerHTML = "Maalesef uygun bir beden bulamadık. <br> Farklı bir değer girerek tekrar deneyebilirsiniz.";
    }
    else if (50 <= kilo && kilo <= 55) {
      beden.innerHTML = "Bedeniniz: 34/XS";
    }
    else if (55 < kilo && kilo <= 65) {
      beden.innerHTML = "Bedeniniz: 36/S";
    }
    else if (65 < kilo && kilo <= 70) {
      beden.innerHTML = "Bedeniniz: 38/M";
    }
    else if (70 < kilo && kilo <= 75) {
      beden.innerHTML = "Bedeniniz: 40/L";
    }
    else if (75 < kilo && kilo <= 80) {
      beden.innerHTML = "Bedeniniz: 42/XL";
    }
    else if (80 < kilo && kilo <= 90) {
      beden.innerHTML = "Bedeniniz: 44/XXL";
    }
  }

  else if (181 <= boy) { // buradasın!!!!
    if (kilo < 55 || kilo > 95) {
      beden.innerHTML = "Maalesef uygun bir beden bulamadık. <br> Farklı bir değer girerek tekrar deneyebilirsiniz.";
    }
    else if (55 <= kilo && kilo <= 65) {
      beden.innerHTML = "Bedeniniz: 34/XS";
    }
    else if (65 < kilo && kilo <= 75) {
      beden.innerHTML = "Bedeniniz: 36/S";
    }
    else if (75 < kilo && kilo <= 80) {
      beden.innerHTML = "Bedeniniz: 38/M";
    }
    else if (80 < kilo && kilo <= 85) {
      beden.innerHTML = "Bedeniniz: 40/L";
    }
    else if (85 < kilo && kilo <= 95) {
      beden.innerHTML = "Bedeniniz: 42/XL";
    }
  }

  else {
    beden.innerHTML = "Maalesef uygun bir beden bulamadık. <br> Farklı bir değer girerek tekrar deneyebilirsiniz.";
  }



});
