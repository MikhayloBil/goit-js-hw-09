const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function populateForm() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    formData.email = savedData.email;
    formData.message = savedData.message;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

// Оновлення formData при введенні користувачем
form.addEventListener('input', (event) => {
  if (event.target.matches('input[type="email"]')) {
    formData.email = event.target.value;
  } else if (event.target.matches('textarea[name="message"]')) {
    formData.message = event.target.value;
  }
  saveFormData();
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    form.reset();
  }
});

document.addEventListener('DOMContentLoaded', populateForm);