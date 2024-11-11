// Funktion zum Aktualisieren der Display-Anzeige
function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}
// Funktion zum Leeren der Display-Anzeige
function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}
// Funktion zum Berechnen des Ergebnisses
function calculateResult() {
    var display = document.getElementById("display");
    try {
        // Verwende eval, um die Berechnung durchzuführen
        display.value = eval(display.value).toString();
    }
    catch (error) {
        display.value = "Fehler";
    }
}
function deleteLastCharacter() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
