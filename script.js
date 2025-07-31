function submitVote(choice) {
  document.getElementById("voteValue").value = choice;
  document.getElementById("voteForm").submit();
  alert("Danke für deine Bewertung!");
}
