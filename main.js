function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icone-${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icone-${player2}.svg" alt="${player2}">
  </li>
  
  `
}
let delay = -0.5
function createCard(date, day, games) {
  delay = delay + 0.5
  return `
      <div class="card" style = "animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
      </div>
    </main>
  `
}
document.querySelector("#cards").innerHTML =
  createCard("24/12", "Quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/12", "Segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "Sexta", createGame("brazil", "16:00", "cameroon"))
