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
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("southkorea", "07:00", "portugal") +
      createGame("ghana", "10:00", "uruguay") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("brazil", "16:00", "cameroon")
  )
