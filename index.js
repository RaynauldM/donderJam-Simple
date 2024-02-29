let ul = document.querySelector("ul");

const setlist = [
  {
    song: "Yellow",
    artist: "Coldplay",
  },
  {
    song: "It runs trough me",
    artist: "Tom Misch",
  },
  {
    song: "Billie Jean",
    artist: "Michael Jackson",
  },
  {
    song: "September",
    artist: "Earth, wind and fire",
  },
  {
    song: "Californication",
    artist: "Red hot chili peppers",
  },
  {
    song: "New shoes",
    artist: "Paolo nutini",
  },
  {
    song: "Treasure",
    artist: "Bruno Mars",
  },
  {
    song: "Help",
    artist: "The Beatles",
  },
  {
    song: "Sexy als ik dans",
    artist: "Nielson",
  },
  {
    song: "Sterrenstof",
    artist: "De jeugd van tegenwoordig",
  },
  {
    song: "Crazy",
    artist: "Gnarls Barkley",
  },
  {
    song: "I got a feelin",
    artist: "Black eyed peas",
  },
  {
    song: "Cooler than me",
    artist: "Mike Posner",
  },
  {
    song: "Magic",
    artist: "Coldplay",
  },
  {
    song: "No such thing",
    artist: "John Mayer",
  },
  {
    song: "Zombie",
    artist: "Cranberries",
  },
  {
    song: "Creep",
    artist: "Radiohead",
  },
  {
    song: "Sweet home alabama",
    artist: "Kid rock",
  },
  {
    song: "Sweet child o mine",
    artist: "Guns 'n roses",
  },
  {
    song: "Dani california",
    artist: "Red hot chili peppers",
  },
  {
    song: "I'm yours",
    artist: "Jason Mraz",
  },
  {
    song: "Pride and joy",
    artist: "Stevie Ray Vaughan",
  },
  {
    song: "Uptown funk",
    artist: "Mark Ronson ft. Bruno Mars",
  },
  {
    song: "Gimme shelter",
    artist: "The Rolling Stones",
  },
  {
    song: "Proud mary",
    artist: "Tina Turner",
  },
  {
    song: "Girl",
    artist: "Anouk",
  },
  {
    song: "Go with the flow",
    artist: "Queens of the stone age",
  },
  {
    song: "No one knows",
    artist: "Queens of the stone age",
  },
  {
    song: "505",
    artist: "Arctic monkeys",
  },
  {
    song: "Nothing else matters",
    artist: "Metallica",
  },
  {
    song: "Do I wanna know",
    artist: "Arctic monkeys",
  },
  {
    song: "Slow dancing in a burning room",
    artist: "John Mayer",
  },
  {
    song: "Hey joe",
    artist: "Jimmy Hendrix",
  },
  {
    song: "Red house",
    artist: "Jimmy Hendrix",
  },
  {
    song: "Jammin",
    artist: "Bob Marley",
  },
  {
    song: "Stir it up",
    artist: "Bob Marley",
  },
];

for (let song of setlist) {
  let newLi = document.createElement("li");
  newLi.textContent = song.song + " - " + song.artist;
  ul.append(newLi);
}
