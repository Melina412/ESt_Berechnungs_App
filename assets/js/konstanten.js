// - Konstanten für Berechnung der Steuerfälle
// Anfangswerte für 2020 (selected)

let fall_1_max = 9408; // 1. y wert
let fall_2_max = 14532; // 1. z wert
let fall_3_max = 57051;
let fall_4_max = 270500;

// konstanten
let fall_2_k1 = 972.87;
let fall_2_k2 = 1400;

let fall_3_k1 = 212.02;
let fall_3_k2 = 2397;
let fall_3_k3 = 972.79;

let fall_4_k1 = 0.42;
let fall_4_k2 = 8963.74;

let fall_5_k1 = 0.45;
let fall_5_k2 = 17078.74;

// ------------------------------------ 2020
let jahr = "2020";
jahrInput.addEventListener("change", (event) => {
  event.preventDefault();
  jahr = document.getElementById("jahrInput").value;
  console.log(jahr);

  if (jahr === "2020") {
    fall_1_max = 9408; // 1. y wert
    fall_2_max = 14532; // 1. z wert
    fall_3_max = 57051;
    fall_4_max = 270500;

    // konstanten
    fall_2_k1 = 972.87;
    fall_2_k2 = 1400;

    fall_3_k1 = 212.02;
    fall_3_k2 = 2397;
    fall_3_k3 = 972.79;

    fall_4_k1 = 0.42;
    fall_4_k2 = 8963.74;

    fall_5_k1 = 0.45;
    fall_5_k2 = 17078.74;
    //
    //
    // ---------------------------------- 2021
  } else if (jahr === "2021") {
    fall_1_max = 9744; // 1. y wert
    fall_2_max = 14753; // 1. z wert
    fall_3_max = 57918;
    fall_4_max = 274612;

    // konstanten
    fall_2_k1 = 955.21;
    fall_2_k2 = 1400;

    fall_3_k1 = 208.85;
    fall_3_k2 = 2397;
    fall_3_k3 = 950.96;

    fall_4_k1 = 0.42;
    fall_4_k2 = 9136.63;

    fall_5_k1 = 0.45;
    fall_5_k2 = 17374.99;
    //
    //
    // ---------------------------------- 2022
  } else if (jahr === "2022") {
    fall_1_max = 10347; // 1. y wert
    fall_2_max = 14926; // 1. z wert
    fall_3_max = 58596;
    fall_4_max = 277825;

    // konstaten
    fall_2_k1 = 1088.67;
    fall_2_k2 = 1400;

    fall_3_k1 = 206.43;
    fall_3_k2 = 2397;
    fall_3_k3 = 869.32;

    fall_4_k1 = 0.42;
    fall_4_k2 = 9336.45;

    fall_5_k1 = 0.45;
    fall_5_k2 = 17671.2;
  }
  console.log(jahr);
});
