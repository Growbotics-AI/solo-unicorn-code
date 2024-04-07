from crewai import Crew

# Assuming the presence of corresponding modules for agents and tasks
from ecosystem_collaboration_agents import FarmingMarketAgents
from network_analysis_tasks import FarmingMarketTasks

class GrowboticsCrew:
    def __init__(self, topic):
        self.topic = topic
        agents = FarmingMarketAgents()
        tasks = FarmingMarketTasks()

        self.ecosystem_researcher_agent = agents.ecosystem_researcher()
        self.collaboration_analyst_agent = agents.collaboration_analyst()
        self.product_developer_agent = agents.product_developer()

        # Update the task method calls to match the available tasks
        self.market_opportunity_deep_dive_task = tasks.market_opportunity_deep_dive(self.ecosystem_researcher_agent, self.topic)
        self.identifying_gaps_and_opportunities_task = tasks.identifying_gaps_and_opportunities(self.collaboration_analyst_agent, self.topic)
        self.conceptualizing_the_solution_task = tasks.conceptualizing_the_solution(self.product_developer_agent, self.topic)

        self.crew = Crew(
            agents=[
                self.ecosystem_researcher_agent,
                self.collaboration_analyst_agent,
                self.product_developer_agent
            ],
            tasks=[
                self.market_opportunity_deep_dive_task,
                self.identifying_gaps_and_opportunities_task,
                self.conceptualizing_the_solution_task
            ],
            memory=False,
            cache=False,
            max_rpm=100,
            verbose=2
        )

    def run(self):
        result = self.crew.kickoff()
        return result

if __name__ == "__main__":
    # Assuming the topic is predefined or fetched from elsewhere in your script
    topic = "Decentralized Farming Ecosystem"
    growbotics_crew = GrowboticsCrew(topic)
    result = growbotics_crew.run()
    print("## Growbotics Insights Crew Report ##")
    print("-------------------------------------")
    print(result)

