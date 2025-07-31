function submitVote(value) {
  // Setze den Wert in das versteckte Formularfeld
  document.getElementById("voteValue").value = value;

  // Formular absenden
  document.getElementById("voteForm").submit();

  // Feedback anzeigen
  document.querySelector(".container").innerHTML = "<h2>🎉 Danke für deine Stimme!</h2>";
}
