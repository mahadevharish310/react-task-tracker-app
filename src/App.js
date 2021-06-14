import React, { useState, useEffect} from "react";

import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);


  useEffect(() => {
    const fetchTasks = async  () => {
      
    }
    return () => {
      cleanup
    }
  }, [input])

  // Add Task --when submit is clicked
  const addTask = (task) => {
    const id = Math.round(Math.random() * 10000) + 1;

    // new task object
    const newTask = {
      id,
      ...task,
    };

    // changing the state makes it visible in the UI
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAddButtonClicked={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {/* conditional Rendering */}
      {showAddTask && <AddTask onAdd={addTask} />}

      {/* conditional Rendering */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show!"
      )}
    </div>
  );
}

//  if you want a class based component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class component</h1>
//   }
// }

export default App;
