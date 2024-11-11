// Funktion zum Aktualisieren der Display-Anzeige
function appendToDisplay(value: string): void {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value += value;
  }
  
  // Funktion zum Leeren der Display-Anzeige
  function clearDisplay(): void {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = "";
  }
  
  // Funktion zum Berechnen des Ergebnisses
  function calculateResult(): void {
    const display = document.getElementById("display") as HTMLInputElement;
    try {
      // Verwende eval, um die Berechnung durchzuführen
      display.value = eval(display.value).toString();
    } catch (error) {
      display.value = "Fehler";
    }
  }

  function deleteLastCharacter(): void {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = display.value.slice(0, -1);
  }


  