function submitVote(choice) {
  document.getElementById("voteValue").value = choice;  // 'Hot' oder 'Not'
  document.getElementById("voteForm").submit();
  alert("Danke für deine Bewertung!");
}
