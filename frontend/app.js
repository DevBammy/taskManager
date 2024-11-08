const colors = [
  '#893101',
  '#ed7117',
  '#d16002',
  '#cc5801',
  '#b56727',
  '#d67229',
];
const gridItems = document.querySelectorAll('.task');

gridItems.forEach((item) => {
  // Randomly choose a color from the colors array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  item.style.backgroundColor = randomColor;
});

const title = document.getElementById('taskTitle');
const desc = document.getElementById('taskDesc');
const priority = document.getElementById('priority');
const deadline = document.getElementById('deadline');
const add = document.getElementById('add');

add.addEventListener('click', (e) => {
  e.preventDefault();

  // Validate input
  if (
    title.value === '' ||
    desc.value === '' ||
    priority.value === '' ||
    deadline.value === ''
  ) {
    alert('All fields are required');
    return;
  }

  const tValue = title.value;
  const dValue = desc.value;
  const pValue = priority.value;
  const date = new Date(deadline.value);

  // Create the payload
  const taskData = {
    title: tValue,
    description: dValue,
    priority: pValue,
    deadline: date,
  };

  fetch('http://localhost:7000/api/tasks/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  })
    .then((data) => {
      console.log('Task created:', data);
      alert('Task created:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error creating the task.');
    });
});
