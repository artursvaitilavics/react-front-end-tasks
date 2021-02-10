import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Make Breakfast.",
      day: "Feb 11 at 8:00am",
      reminder: false,
    },
    {
      id: 2,
      text: "Create an app.",
      day: "Feb 16 at 9:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Have a drink.",
      day: "Feb 13 at 8:00pm",
      reminder: true,
    },
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Hello!!!" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "There is no tasks in your todo list"
      )}
    </div>
  );
}

export default App;
