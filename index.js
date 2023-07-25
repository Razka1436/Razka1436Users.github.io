async function fetchAndDisplayUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const users = data.slice(0, 5);

    const usersDiv = document.getElementById("users");

    users.forEach((user) => {
      const name = user.name;
      const userTable = document.createElement("table");
      userTable.classList.add("user-table");

      userTable.innerHTML = `
            <tr>
              <th>Name</th>
              <td>${name}</td>
            </tr>
          `;

      usersDiv.appendChild(userTable);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    const nameElement = document.getElementById("name");
    nameElement.textContent = "Error fetching data:";
  }
}

fetchAndDisplayUsers();
