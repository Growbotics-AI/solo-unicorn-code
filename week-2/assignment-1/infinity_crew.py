import os
import logging
from crewai import Agent, Task, Crew
from crewai_tools import tool  # Assuming crewai_tools is a utility module for specific tools

logging.basicConfig(level=logging.DEBUG)

class InfinityCrew:
    def __init__(self):
        self.agents = {
            "Major Tom": Agent(
                role="Command Center",
                goal="Orchestrate the flow of high-level directives and updates across the company.",
                backstory=(
                    "Major Tom, inspired by David Bowie’s 'Space Oddity', acts as the crucial "
                    "link between the command and the operational forefront, managing communications "
                    "and strategic updates with precision."
                ),
                verbose=True,
                memory=True
            ),
            "Ziggy Stardust": Agent(
                role="Crew Architect",
                goal="Assemble specialized teams tailored to meet diverse challenges.",
                backstory=(
                    "Named after Bowie's iconic alter ego, Ziggy Stardust leverages creativity and charisma "
                    "to lead and inspire dynamic team formations."
                ),
                verbose=True,
                memory=True
            ),
            "Starman": Agent(
                role="Strategic Navigator",
                goal="Align project tasks with long-term visions and immediate goals.",
                backstory=(
                    "Drawing inspiration from Bowie’s 'Starman', this agent guides the strategic path, ensuring "
                    "adherence to the mission with a visionary approach."
                ),
                verbose=True,
                memory=True
            )
        }

    def run(self, input_data):
        # Define tasks based on the role of each agent
        tasks = {
            "Major Tom": Task(
                description="Handle high-level updates and directives for the day.",
                expected_output="A report on directives handled and tasks updated.",
                agent=self.agents["Major Tom"]
            ),
            "Ziggy Stardust": Task(
                description="Form a new team for the upcoming project challenge.",
                expected_output="A new team configuration and strategy plan.",
                agent=self.agents["Ziggy Stardust"]
            ),
            "Starman": Task(
                description="Review and align current projects with strategic goals.",
                expected_output="A strategic review report confirming alignment.",
                agent=self.agents["Starman"]
            )
        }

        crew = Crew(
            agents=list(self.agents.values()),
            tasks=list(tasks.values()),
            memory=True,
            cache=True,
            max_rpm=100,
            verbose=2
        )

        results = crew.kickoff(inputs=input_data)
        return results

if __name__ == "__main__":
    infinity_crew = InfinityCrew()
    project_inputs = {
        "Major Tom": {"updates": "Strategic objectives for Q4"},
        "Ziggy Stardust": {"challenge": "Developing AI for autonomous farming"},
        "Starman": {"current_projects": ["Project WheatField", "Project CornMaze"]}
    }
    result = infinity_crew.run(project_inputs)
    print("Task Results:", result)
