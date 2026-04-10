import React, { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulating API response (given in question)
    const data = [
      {
        id: "1",
        title: "Complete Assignment",
        description: "React lab work",
        status: "pending",
      },
    ];

    setTasks(data);
  }, []);

  return (
    <div>
      <h2>Tasks List</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <p><b>Title:</b> {task.title}</p>
          <p><b>Description:</b> {task.description}</p>
          <p><b>Status:</b> {task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;