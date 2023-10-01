// - Berechnung funktioniert, aber die Methode mit Eingabe der einzelnen Formeln
// - und Konstanten erscheint mir extrem unübersichtlich und unintuitiv

// todo - fehlermeldung bei falschem input
// todo - style
// todo - code versuchen übersichtlicher zu gliedern
// * ---------------------------------------------------------------------------------------

//  * Zurücksetzen des Output Textes beim Ändern der Auswahl Jahr/Tarif
//  * (Notlösung, muss eigenltich in eine der anderen Funktionen mit eingebaut werden)
function clear() {
  document.getElementById("EStOutput").innerHTML = "";
}
clear();

//  * zusätzliche Funktion um Auswahl des Jahres bei veränderter Auswahl
//  * zu aktualisieren (wollte mit onchange/onclick einfach nicht funktionieren)
//  *
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("jahrInput").value;
  console.log("jahr value event", jahr);
});

//  * Verstecken des 2. Inputfeldes wenn Grundtarif gewählt ist
//  *
einzeln.addEventListener("change", () => {
  person2Input.style.display = "none";
});
zusammen.addEventListener("change", () => {
  person2Input.style.display = "block";
});

function berechnen() {
  //   * Werte lesen
  //   *
  let jahr = document.getElementById("jahrInput").value;
  let tarif = document.querySelector('input[name="tarif"]:checked');
  let zvE_1 = Number(document.getElementById("person1").value);
  let zvE_2 = Number(document.getElementById("person2").value);

  console.log({ jahr });
  console.log({ tarif });
  console.log({ zvE_1 });
  console.log({ zvE_2 });

  //   * Berechnung zu versteuerndes Einkommen
  //   *
  let zvE = 0;

  if (tarif === einzeln) {
    zvE = zvE_1;
  } else if (tarif === zusammen) {
    zvE = (zvE_1 + zvE_2) / 2;
  }
  console.log({ zvE });

  //   * Unterscheidung der 5 Fälle
  //   *
  let fall = "";
  let ESt = 0;

  if (zvE <= fall_1_max) {
    fall = "Fall 1";
    console.log("Fall 1");
  } else if (zvE > fall_1_max && zvE <= fall_2_max) {
    fall = "Fall 2";
    console.log("Fall 2");
  } else if (zvE > fall_2_max && zvE <= fall_3_max) {
    fall = "Fall 3";
    console.log("Fall 3");
  } else if (zvE > fall_3_max && zvE <= fall_4_max) {
    fall = "Fall 4";
    console.log("Fall 4");
  } else if (zvE > fall_4_max) {
    fall = "Fall 5";
    console.log("Fall 5");
  }

  //   * Berechnung laut Formeln + Output
  //   *
  let output = document.getElementById("EStOutput");

  switch (fall) {
    case "Fall 1": // - Fall 1 ---------------
      ESt = 0;
      output.innerHTML = `${ESt.toFixed(2)} €`;
      console.log({ ESt });
      break;
    case "Fall 2": // - Fall 2 ---------------
      y = (zvE - fall_1_max) / 10000;
      ESt = (fall_2_k1 * y + fall_2_k2) * y;
      console.log({ ESt });
      console.log(2 * ESt);
      if (tarif === einzeln) {
        output.innerHTML = `${ESt.toFixed(2)} €`;
      } else if (tarif === zusammen) {
        output.innerHTML = `${2 * ESt.toFixed(2)} €`;
      }
      break;
    case "Fall 3": // - Fall 3 ---------------
      z = (zvE - fall_2_max) / 10000;
      ESt = (fall_3_k1 * z + fall_3_k2) * z + fall_3_k3;
      console.log({ ESt });
      console.log(2 * ESt);
      if (tarif === einzeln) {
        output.innerHTML = `${ESt.toFixed(2)} €`;
      } else if (tarif === zusammen) {
        output.innerHTML = `${2 * ESt.toFixed(2)} €`;
      }
      break;
    case "Fall 4": // - Fall 4 ---------------
      ESt = fall_4_k1 * zvE - fall_4_k2;
      console.log({ ESt });
      console.log(2 * ESt);
      if (tarif === einzeln) {
        output.innerHTML = `${ESt.toFixed(2)} €`;
      } else if (tarif === zusammen) {
        output.innerHTML = `${2 * ESt.toFixed(2)} €`;
      }
      break;
    case "Fall 5": // - Fall 5 ---------------
      ESt = fall_5_k1 * zvE - fall_5_k2;
      console.log({ ESt });
      console.log(2 * ESt);
      if (tarif === einzeln) {
        output.innerHTML = `${ESt.toFixed(2)} €`;
      } else if (tarif === zusammen) {
        output.innerHTML = `${2 * ESt.toFixed(2)} €`;
      }
      break;
  }
  console.log(
    "%c berechnung ende -----------------",
    "background: yellow; color: black;"
  );
}
