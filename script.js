const searchBox = document.getElementById("searchBox");
const animeList = document.getElementById("animeList");
const animes = animeList.getElementsByClassName("anime");

searchBox.addEventListener("keyup", function() {
  let filter = searchBox.value.toLowerCase();
  for (let i = 0; i < animes.length; i++) {
    let title = animes[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
    if (title.includes(filter)) {
      animes[i].style.display = "";
    } else {
      animes[i].style.display = "none";
    }
  }
});
