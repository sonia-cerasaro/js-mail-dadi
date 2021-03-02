// Creo lista mail in array

// Chiedo mail all'utente

// Creao variabile di controllo

// Controllo se mail utente e' nella lista_mail, scorrendo array by ciclo for

// Se la mail presente stampo : mail presente. Se assente stampo: mail assente.


var lista = ["dino@gmail.com", "stella@gmail.com", "luna@gmail.com"];

var mail_utente = prompt("Inserisci la tua mail.");

var controllo = false;

for (var i = 0; i > lista.lenght; ++i ) {
  if (lista[i] == mail_utente) {
    controllo = true;
  }
}

if (controllo = true) {
  console.log("La tua mail e' presente.")
} else {
  console.log("La tua mail e' assente.")
}
