var lista = ["dino@gmail.com", "stella@gmail.com", "luna@gmail.com"];

var mail_utente = prompt("Inserisci la tua mail.");

var controllo = false;

for (var i = 0; i < lista.length; ++i ) {
  if (lista[i] == mail_utente) {
    controllo = true;
  }
}

if (controllo) {
  console.log("La tua mail e' presente.")
} else {
  console.log("La tua mail e' assente.")
}

// GIOCO DADI

for (var dado_computer =[], i=0; i < 1; ++i)
dado_computer[Math.floor((Math.random()* 6) + 1)]=i;

console.log(dado_computer);

for (var dado_utente =[], i=0; i < 1; ++i)
dado_utente[Math.floor((Math.random()* 6) + 1)]=i;

console.log(dado_utente);

if (dado_computer < dado_utente) {
  console.log("Ha vinto il computer!")
} else {
  console.log("Hai vinto tu!")
}







// I ITERAZIONE + spiegazione algoritmo
//
// i(index) = 0 (i ha valore 0)
//
// i (0) e' minore di lista? (3)
//
// se SI (allora scorri e aggiungi 1 numero in piu' a i
// (prossimo ciclo i diventa 1 finche' non raggiunge/supera il numero di lista(3),
// poi esce dal ciclo))
//
// se i(index) di lista(3) e' strettamente uguale alla mail_utente-
// in parole povere- se nell'indice della lista c'e' qualcosa di identico
// alla mail_utente, la variabile di controllo prendera' valore True,
// altrimenti se non c'e' nulla di identico rimarra' false.
//
// II ITERAZIONE!
//
// i = 1
//
// i e' minore di lista (3)?
//
// se SI aggiungi 1 a i

//
// III ITERAZIONE!
//
// i = 2
//
// i e' minore di lista (3)?
//
// se SI aggiungi aggiungi 1 a i.

//
// IV ITERAZIONE!
//
// i = 3
//
// i e' minore di lista (3)?
//
// se NO esci dal ciclo e stampa
// in console che nella lista non c'e' una mail simile.
//
//
//
