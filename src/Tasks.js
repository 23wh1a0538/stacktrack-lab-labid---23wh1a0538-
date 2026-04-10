import React, { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      {
        id: "1",
        title: "Complete Assignment",
        description: "React lab work",
        status: "pending",
      },
    ]);
  }, []);

  return (
    <div>
      <h2>Tasks List</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;