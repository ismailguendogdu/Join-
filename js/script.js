async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

let colors = [
  "#FF7A00",
  "#FF5EB3",
  "#6E52FF",
  "#FF745E",
  "#00BEE8",
  "#9327FF",
  "#1FD7C1",
  "#FFA35E",
  "#FC71FF",
  "#FFC701",
  "#0038FF",
  "#FF4646",
  "#FFBB2B",
  "#462f8a",
];

let contacts = [
  {
    name: "Anton Mayer",
    email: "anton@gmail.com",
    initials: "AM",
    badgecolor: colors[0],
    phone: 4911111111,
  },
  {
    name: "Anja Schulz",
    email: "schulz@gmail.com",
    initials: "AS",
    badgecolor: colors[1],
    phone: 4911111111,
  },
  {
    name: "Eva Fischer",
    email: "fischer@gmail.com",
    initials: "EF",
    badgecolor: colors[2],
    phone: 4911111111,
  },
  {
    name: "David Eisenberg",
    email: "eisenberg@gmail.com",
    initials: "DE",
    badgecolor: colors[3],
    phone: 4911111111,
  },
  {
    name: "Benedikt Ziegler",
    email: "ziegler@gmail.com",
    initials: "BZ",
    badgecolor: colors[4],
    phone: 4911111111,
  },
];

let tasks = [
  {
    title: "First test title",
    timestamp: 1717999440032,
    assigned: [contacts[0], contacts[1]],
    description: "This will be a description",
    dueDate: "2024-06-12",
    prio: "medium",
    category: {
      name: "Management",
      color: "blue",
    },
    subtasks: {
      subtaskList: [{ name: "Project structure", completed: false }],
      completed: 0,
    },
    status: "toDos",
  },
  {
    title: "Progressing Task",
    timestamp: 1717999440023,
    assigned: [contacts[3]],
    description: "Anna did not describe her task",
    dueDate: "2024-06-13",
    prio: "high",
    category: {
      name: "Management",
      color: "blue",
    },
    subtasks: {
      subtaskList: [
        { name: "Coffeebreak", completed: true },
        { name: "Coffeebreak", completed: false },
      ],
      completed: 1,
    },
    status: "inProgress",
  },
  {
    title: "Await Feedback Task",
    timestamp: 1717999440040,
    assigned: [contacts[3], contacts[2]],
    description: "No description needed",
    dueDate: "2024-06-15",
    prio: "low",
    category: {
      name: "Management",
      color: "blue",
    },
    subtasks: {
      subtaskList: [{ name: "Project structure", completed: false }],
      completed: 0,
    },
    status: "awaitFeedback",
  },
  {
    title: "Done Task",
    timestamp: 1717999440100,
    assigned: [contacts[0]],
    description: "Create a kanban board",
    dueDate: "2024-06-15",
    prio: "low",
    category: {
      name: "Scrum",
      color: "pink",
    },
    subtasks: {
      subtaskList: [
        { name: "Start project", completed: true },
        { name: "Scrum", completed: true },
      ],
      completed: 2,
    },
    status: "done",
  },
];

function getValueFromInput(inputId) {
  let container = document.getElementById(inputId);
  return container.value;
}

function parseTextInput(string) {
  return string.trim();
}

function loadTasks() {
  let tasksAsString = localStorage.getItem("tasks");
  if (tasksAsString) {
    tasks = JSON.parse(tasksAsString);
  }
}
