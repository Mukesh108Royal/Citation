const addAuthorButton = document.getElementById("add-author-button");
const generateCitationButton = document.getElementById("generate-citation-button");
const authorContainer = document.getElementById("author-container");
const citationStyleSelect = document.getElementById("citation-style");
const output = document.getElementById("output");

addAuthorButton.addEventListener("click", function() {
  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  
  authorDiv.innerHTML = `
    <label for="author-first-name">Author First Name:</label>
    <input type="text" id="author-first-name">

    <label for="author-middle-name">Author Middle Name:</label>
    <input type="text" id="author-middle-name">

    <label for="author-last-name">Author Last Name:</label>
    <input type="text" id="author-last-name">
  `;
  
  authorContainer.appendChild(authorDiv);
});

generateCitationButton.addEventListener("click", function() {
  let citation = "";
  const authors = [];
  
  const authorElements = document.querySelectorAll(".author");
  for (const authorEl of authorElements) {
    const firstName = authorEl.querySelector("#author-first-name").value;
    const middleName = authorEl.querySelector("#author-middle-name").value;
    const lastName = authorEl.querySelector("#author-last-name").value;
    
    authors.push(`${lastName}, ${firstName} ${middleName}`.trim());
  }
  
  const title = document.getElementById("title").value;
  const publisher = document.getElementById("publisher").value;
  const year = document.getElementById("year").value;
  const url = document.getElementById("url").value;
  
  switch (citationStyleSelect.value) {
    case "MLA":
      citation = `${authors.join(", ")}. "${title}." ${publisher}, ${year}.`;
      break;
    case "APA":
      citation = `${authors.join(", ")}. (${year}). ${title}. ${publisher}.`;
      break;
    case "Chicago":
      citation = `${authors.join(", ")}. ${title}. ${publisher}, ${year}.`;
      break;
  }
  
  output.textContent = citation;
});





