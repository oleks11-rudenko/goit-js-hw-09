const STORAGE_KEY = "feedback-form-state";
const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

checkLocalStorage();

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInputs);

function checkLocalStorage() {
  const getLocalItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!getLocalItems) {
    return;
  } else {
    form.email.value = getLocalItems.email;
    form.message.value = getLocalItems.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}

function onFormInputs(event) {
  const data = new FormData(event.currentTarget);
  for (const [key, value] of data) {
    formData[key] = value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
