// - Konstanten für Berechnung der Steuerfälle

let fall_1_max = 0; // 1. y wert
let fall_2_max = 0; // 1. z wert
let fall_3_max = 0;
let fall_4_max = 0;

// konstaten
let fall_2_k1 = 0;
let fall_2_k2 = 0;

let fall_3_k1 = 0;
let fall_3_k2 = 0;
let fall_3_k3 = 0;

let fall_4_k1 = 0;
let fall_4_k2 = 0;

let fall_5_k1 = 0;
let fall_5_k2 = 0;

let jahr = document.getElementById("jahrInput").value;

// ------------------------------------ 2020
if (jahr === "2020") {
  fall_1_max = 9408; // 1. y wert
  fall_2_max = 14532; // 1. z wert
  fall_3_max = 57051;
  fall_4_max = 270500;

  // konstaten
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
  fall_1_max = 9408; // 1. y wert
  fall_2_max = 14532; // 1. z wert
  fall_3_max = 57051;
  fall_4_max = 270500;

  // konstaten
  fall_2_k1 = 972.87;
  fall_2_k2 = 1400;

  fall_3_k1 = 212.02;
  fall_3_k2 = 2037;
  fall_3_k3 = 972.79;

  fall_4_k1 = 0.42;
  fall_4_k2 = 8963.74;

  fall_5_k1 = 0.45;
  fall_5_k2 = 17078.74;
  //
  //
  // ---------------------------------- 2022
} else if (jahr === "2022") {
  fall_1_max = 9408; // 1. y wert
  fall_2_max = 14532; // 1. z wert
  fall_3_max = 57051;
  fall_4_max = 270500;

  // konstaten
  fall_2_k1 = 972.87;
  fall_2_k2 = 1400;

  fall_3_k1 = 212.02;
  fall_3_k2 = 2037;
  fall_3_k3 = 972.79;

  fall_4_k1 = 0.42;
  fall_4_k2 = 8963.74;

  fall_5_k1 = 0.45;
  fall_5_k2 = 17078.74;
}
