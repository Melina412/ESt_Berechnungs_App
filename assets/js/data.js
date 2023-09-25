let dataArray;
const csvFilePath = "./assets/files/formeln2020.csv";

// mit fetch API die csv file runterladen
fetch(csvFilePath)
  .then((response) => response.text())
  .then((csvData) => {
    // function aufrufen
    dataArray = processData(csvData);
    console.log({ dataArray });
  })
  .catch((error) => {
    console.error(
      "Fehler beim Herunterladen und Verarbeiten der CSV-Datei:",
      error
    );
  });

// function definieren, um csv zu verarbeiten
function processData(csvData) {
  let lines = csvData.split("\n");
  let data = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line) {
      let columns = line.split(";");
      data.push(columns);
    }
  }

  return data;
}
