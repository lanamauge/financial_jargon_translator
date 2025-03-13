// document.getElementById("searchButton").addEventListener("click", fetchDefinition);
// document.querySelectorAll(".example-term").forEach(term => {
//     term.addEventListener("click", function() {
//         document.getElementById("searchInput").value = this.innerText;
//         fetchDefinition();
//     });
// });

// async function fetchDefinition() {
//     const term = document.getElementById("searchInput").value.trim();
//     if (!term) return;

//     const resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "Loading...";
//     resultDiv.style.display = "block";

//     try {
//         const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
//         const data = await response.json();

//         if (data.title === "No Definitions Found") {
//             resultDiv.innerHTML = `<p>No definition found for <b>${term}</b>. Try another term.</p>`;
//             return;
//         }

//         const definition = data[0].meanings[0].definitions[0].definition;
//         resultDiv.innerHTML = `<h2>${term}</h2><p>${definition}</p>`;
//     } catch (error) {
//         resultDiv.innerHTML = "<p>Something went wrong. Please try again.</p>";
//     }
// }
