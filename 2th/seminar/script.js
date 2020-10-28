const API_URL = "https://api.github.com/users/";
// elment들을 가져옴 
const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (event)=>{
    event.preventDefault(); 
    const user = input.value;
    if (user) {
        getUser(user);
        input.value = "";
    }
});
const getUser = async (username) => {
    const response = await fetch(API_URL + username);
    const responseData = await response.json();
    createUserCard(responseData);
    getRepos(username);
};

const createUserCard = (user) => {
    const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers</strong>${user.followers}</li>
          <li><strong>Following</strong>${user.following}</li>
          <li><strong>Repos</strong>${user.public_repos}</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
    main.innerHTML = cardHTML;
};

const getRepos = async (username) => {
    const reponse = await fetch(API_URL + username + "/repos");
    const responseData = await reponse.json();
    addReposToCard(responseData);
}
const addReposToCard = (repos) => {
    const reposElement = document.getElementById("repos");
    repos.slice(0,10).forEach((repo) => {
        const element = document.createElement("a");
        element.classList.add("repo")
        element.href = repo.html_url;
        element.target = "_blank";
        element.innerText = repo.name;
        reposElement.appendChild(element);
    });
};