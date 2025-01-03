async function fetchSetlist(setlistX, setlistContainerId) {
  try {
    const response = await fetch(setlistX);
    const setlist = await response.json();

    const setlistContainer = document.getElementById(setlistContainerId);
    setlistContainer.innerHTML = ""; // Clear any existing content

    setlist.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("setlist-item");
      listItem.innerHTML = `<span class="song">${item.song}</span> - <span class="artist">${item.artist}</span>`;
      setlistContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching setlist:", error);
  }
}

function createList() {
  fetchSetlist("set1.json", "set1");
  fetchSetlist("set2.json", "set2");
  fetchSetlist("set3.json", "set3");
  fetchSetlist("set4.json", "extraSet");
}

// Load the setlist when the page loads
document.addEventListener("DOMContentLoaded", createList);
