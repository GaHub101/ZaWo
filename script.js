window.onload = () => {
  if (localStorage.getItem("voted") === "true") {
    document.querySelector(".container").innerHTML = "<h2>✅ Du hast bereits abgestimmt. Danke!</h2>";
  }
};

function submitVote(value) {
  // Bereits abgestimmt? -> Abbrechen
  if (localStorage.getItem("voted") === "true") {
    alert("Du hast bereits abgestimmt.");
    return;
  }

  // Wert setzen und Formular absenden
  document.getElementById("voteValue").value = value;
  localStorage.setItem("voted", "true");

  // Absenden per Timeout, damit Google das Formular korrekt empfängt
  document.getElementById("voteForm").submit();

  // 1 Sekunde warten, dann Bestätigung anzeigen
  setTimeout(() => {
    document.querySelector(".container").innerHTML = "<h2>🎉 Danke für deine Stimme!</h2>";
  }, 1000);
}
