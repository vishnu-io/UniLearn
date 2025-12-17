function showPlanner() {
  document.getElementById("content").innerHTML = `
    <h2>Study Planner</h2>
    <input id="subject" placeholder="Subject">
    <button onclick="addPlan()">Add</button>
    <ul id="planList"></ul>
  `;
}

function addPlan() {
  let subject = document.getElementById("subject").value;
  let list = document.getElementById("planList");
  list.innerHTML += `<li>${subject}</li>`;
}

function showNotes() {
  document.getElementById("content").innerHTML = `
    <h2>Notes</h2>
    <input type="file">
    <p>(Demo upload)</p>
  `;
}

function showPYQ() {
  document.getElementById("content").innerHTML = `
    <h2>Previous Year Questions</h2>
    <ul>
      <li>C Programming – 2023</li>
      <li>Maths – 2022</li>
    </ul>
  `;
}

function showBot() {
  document.getElementById("content").innerHTML = `
    <h2>Chatbot</h2>
    <input id="userQ" placeholder="Ask something">
    <button onclick="reply()">Ask</button>
    <p id="botReply"></p>
  `;
}

function reply() {
  let q = document.getElementById("userQ").value.toLowerCase();
  let reply = "Please check notes section.";

  if (q.includes("c")) reply = "C is a programming language.";
  if (q.includes("exam")) reply = "Make a study plan daily.";

  document.getElementById("botReply").innerText = reply;
}
