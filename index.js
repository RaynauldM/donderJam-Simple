let ul = document.querySelector("ul");

const setlist = [
  {
    song: "Yellow",
    artist: "Coldplay",
  },
  {
    song: "It Runs Trough Me",
    artist: "Tom Misch",
  },
  {
    song: "Billie Jean",
    artist: "Michael Jackson",
  },
  {
    song: "September",
    artist: "Earth, Wind and Fire",
  },
  {
    song: "Californication",
    artist: "Red Hot Chili Peppers",
  },
  {
    song: "New Shoes",
    artist: "Paolo Nutini",
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
    song: "Sexy Als Ik Dans",
    artist: "Nielson",
  },
  {
    song: "Sterrenstof",
    artist: "De Jeugd van Tegenwoordig",
  },
  {
    song: "Crazy",
    artist: "Gnarls Barkley",
  },
  {
    song: "I Got a Feelin",
    artist: "Black Eyed Peas",
  },
  {
    song: "Cooler Than Me",
    artist: "Mike Posner",
  },
  {
    song: "Magic",
    artist: "Coldplay",
  },
  {
    song: "No Such Thing",
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
    song: "Sweet Home Alabama",
    artist: "Kid Rock",
  },
  {
    song: "Sweet Child of Mine",
    artist: "Guns 'n Roses",
  },
  {
    song: "Dani California",
    artist: "Red Hot Chili Peppers",
  },
  {
    song: "I'm Yours",
    artist: "Jason Mraz",
  },
  {
    song: "Pride and Joy",
    artist: "Stevie Ray Vaughan",
  },
  {
    song: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
  },
  {
    song: "Gimme Shelter",
    artist: "The Rolling Stones",
  },
  {
    song: "Proud Mary",
    artist: "Tina Turner",
  },
  {
    song: "Girl",
    artist: "Anouk",
  },
  {
    song: "Go With the Flow",
    artist: "Queens of the Stone Age",
  },
  {
    song: "No One Knows",
    artist: "Queens of the Stone Age",
  },
  {
    song: "505",
    artist: "Arctic Monkeys",
  },
  {
    song: "Nothing Else Matters",
    artist: "Metallica",
  },
  {
    song: "Do I Wanna Know",
    artist: "Arctic Monkeys",
  },
  {
    song: "Slow Dancing In a Burning Room",
    artist: "John Mayer",
  },
  {
    song: "Hey Joe",
    artist: "Jimmy Hendrix",
  },
  {
    song: "Red House",
    artist: "Jimmy Hendrix",
  },
  {
    song: "Jammin",
    artist: "Bob Marley",
  },
  {
    song: "Stir It Up",
    artist: "Bob Marley",
  },
  {
    song: "Come Together",
    artist: "The Beatles",
  },
  {
    song: "Tennessee Whiskey",
    artist: "Chris Stapleton",
  },
];

for (let song of setlist) {
  let newLi = document.createElement("li");
  newLi.textContent = song.song + " - " + song.artist;
  ul.append(newLi);
}
