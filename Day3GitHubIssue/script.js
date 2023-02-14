let list = document.getElementById("list-container");
let prev = document.getElementById("prev");
let nxt = document.getElementById("nxt");
let pageno = document.getElementById("pageno");
let issueli = document.getElementById("list");
let pageNumberHere = 1;
pageno.innerHTML = `<h3> Page Number : ${pageNumberHere} </h3>`;

function gitHubApi() {
  fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
  )
    .then((res) => res.json())
    .then((data) => {
      issueli.innerHTML = " ";
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
        issueli.innerHTML += `<li>${data[i].title}</li>`;
      }
    });
}

gitHubApi();

nxt.addEventListener("click", function () {
  prev.disabled = false;
  pageNumberHere++;
  pageno.innerHTML = `<h3> Page Number : ${pageNumberHere} </h3>`;
  gitHubApi();
});

prev.addEventListener("click", function () {
  if (pageNumberHere > 1) {
    pageNumberHere--;
    pageno.innerHTML = `<h3> Page Number : ${pageNumberHere} </h3>`;
    gitHubApi();
  }

  if (pageNumberHere == 1) {
    prev.disabled = true;
  }
});
