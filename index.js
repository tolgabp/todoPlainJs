const form = document.querySelector("form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value.trim();
  if (!task) return;
  const listItem = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = task;

  const toggleInput = document.createElement("input");
  toggleInput.type = "checkbox";
  toggleInput.classList.add("checkbox-rounded");
  toggleInput.setAttribute("aria-label", "Mark task as complete");

  toggleInput.addEventListener("change", () => {
    textSpan.classList.toggle("completed",toggleInput.checked);
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "❌";
  removeButton.setAttribute("aria-label", "Delete task");
  removeButton.addEventListener("click", () => {
    listItem.remove();
    input.focus();
  });

  listItem.appendChild(toggleInput);
  listItem.appendChild(textSpan);
  listItem.appendChild(removeButton);

  list.appendChild(listItem);
  form.reset();
  input.focus();
});
