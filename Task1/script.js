function showInformation() {
  const name = document.getElementById('name').value;
  const internship = document.getElementById('internship').value;
  const hobbies = document.getElementById('hobbies').value;

  const outputDiv = document.getElementById('output');
  const info = `Name: ${name}\nInternship: ${internship}\nHobbies: ${hobbies}`;

  outputDiv.innerText = info;
  outputDiv.classList.add('show');
}
