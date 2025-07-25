document.addEventListener("DOMContentLoaded", () => {
  const githubUsername = "DSVerster";
  const projectList = document.getElementById("ProjectList");

  if (!projectList) {
    console.error("Could not find element with ID 'ProjectList'");
    return;
  }

  fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(res => res.json())
    .then(repos => {
      repos.forEach(repo => {
        const listItem = document.createElement("li");
            
        if (repo.description == null) {
          repo.description = "(No description yet)";
        }

        listItem.innerHTML = `<strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong><br><small>${repo.description}</small>`;
        projectList.appendChild(listItem); 
      });

      if (projectList.children.length === 0) {
        projectList.innerHTML = "<li>No public repositories to show.</li>";
      }
    })
    .catch(err => {
      console.error("GitHub API error:", err);
      projectList.innerHTML = "<li>Error loading repositories. Please try again later.</li>";
    });

});