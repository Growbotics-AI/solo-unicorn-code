from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from crewai import Agent, Task, Crew

app = FastAPI()

# Define Major Tom with autonomous decision-making capabilities
major_tom = Agent(
    role="Command Center",
    goal="Direct operations and autonomously delegate tasks based on their nature.",
    backstory="Inspired by 'Space Oddity', Major Tom oversees and delegates strategic and creative tasks.",
    verbose=True,
    memory=True,
    allow_delegation=True  # Assuming the Agent class supports a mechanism to handle this property
)

ziggy_stardust = Agent(
    role="Crew Architect",
    goal=("Provide a detailed recommendation for the most suitable crew composition for tasks assigned by Major Tom, "
          "without working on the tasks directly. Recommendations should specify the optimal number of agents, their roles, "
          "goals, and backstories. The expected JSON structure of the response is: "
          "{{\"agents\": [{{\"role\": \"Specific Role\", \"goal\": \"Specific Goal\", \"backstory\": \"Specific Backstory\"}}, ...]}}"),
    backstory=("Drawing inspiration from David Bowie's iconic alter ego, Ziggy Stardust combines charisma and visionary "
               "thinking to architect teams that meet the unique demands of each project. Ziggy not only identifies the key "
               "skills needed but also crafts detailed plans on how each member can contribute to the mission, ensuring that "
               "each team is perfectly tailored to the task’s requirements."),
    verbose=True,
    memory=True
)


starman = Agent(
    role="Strategic Navigator",
    goal="Align all operations with the enterprise's strategic visions.",
    backstory="Starman ensures projects adhere to strategic objectives.",
    verbose=True,
    memory=True
)

# Pydantic model for task input
class TaskInput(BaseModel):
    topic: str

# Endpoint to assign and execute a task
@app.post("/execute_task/")
async def execute_task(task_input: TaskInput):
    # Major Tom decides internally who should handle the task
    # In a real setup, you would implement this decision-making in the agent's method or a utility function.
    
    # Create the task dynamically
    task = Task(
        description=f"Analyze the topic: {task_input.topic}",
        expected_output=f"A detailed analysis of the topic '{task_input.topic}'.",
        agent=major_tom  # Task initially assigned to Major Tom
    )
    
    # Execute the task with Major Tom, who might reassign internally
    crew = Crew(
        agents=[major_tom, ziggy_stardust, starman],
        tasks=[task],
        memory=False,
        cache=False,
        max_rpm=100,
        verbose=2
    )
    
    result = crew.kickoff(inputs={'topic': task_input.topic})
    return {"result": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
