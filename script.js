window.onload = () => {
  if (localStorage.getItem("voted") === "true") {
    document.querySelector(".container").innerHTML = "<h2>✅ Du hast bereits abgestimmt. Danke!</h2>";
  }
};

function submitVote(value) {
  // Setze den Wert im Hidden-Feld
  document.getElementById("voteValue").value = value;

  // Verhindere Mehrfachvoting direkt
  if (localStorage.getItem("voted") === "true") {
    alert("Du hast bereits abgestimmt.");
    return;
  }

  // Formular absenden
  document.getElementById("voteForm").submit();

  // Stimme als 'verbraucht' speichern
  localStorage.setItem("voted", "true");

  // Feedback anzeigen
  document.querySelector(".container").innerHTML = "<h2>🎉 Danke für deine Stimme!</h2>";
}
