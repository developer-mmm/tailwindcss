const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = {
    name: form.name.value,
    PhoneNumber: form["phone-number"].value,
    userSurname: form.surname.value,
    email: form.email.value,
  };
  console.log(newUser);
});
