from crewai import Agent

# Utilizing the specified tools for browsing, searching, and calculations
from tools.browser_tools import BrowserTools
from tools.calculator_tools import CalculatorTools
from tools.search_tools import SearchTools

class FarmingMarketAgents:
    def ecosystem_researcher(self):
        return Agent(
            role='Ecosystem Researcher',
            goal="Analyze the decentralized farming ecosystem, focusing on current trends, consumer needs, and identifying unmet market demands.",
            backstory=(
                "Dedicated to unveiling insights within the farming ecosystem, this researcher leverages technology "
                "to understand how AI and robotics can revolutionize sustainable practices."
            ),
            verbose=True,
            memory=False,
            tools=[
                BrowserTools.scrape_and_summarize_website,
                SearchTools.search_internet,
                CalculatorTools.calculate
            ],
            allow_delegation=False
        )

    def collaboration_analyst(self):
        return Agent(
            role='Collaboration Analyst',
            goal="Identify and map collaboration opportunities, focusing on the integration of local manufacturers and assemblers in the deployment of decentralized robots.",
            backstory=(
                "Expert in pinpointing collaboration pathways, this analyst explores how decentralized robotics "
                "can be locally built and implemented, fostering innovation in urban and small-scale farming."
            ),
            verbose=True,
            memory=False,
            tools=[
                BrowserTools.scrape_and_summarize_website,
                SearchTools.search_internet,
                CalculatorTools.calculate
            ],
            allow_delegation=False
        )

    def product_developer(self):
        return Agent(
            role='Product Developer',
            goal="Refine and develop the Growbotics AI concept, integrating stakeholder feedback to create scalable, impactful solutions for decentralized farming.",
            backstory=(
                "Combining technical expertise with a visionary approach, this developer focuses on crafting "
                "open-source, locally manufacturable robotics solutions that address real-world farming challenges."
            ),
            verbose=True,
            memory=False,
            tools=[
                BrowserTools.scrape_and_summarize_website,
                SearchTools.search_internet,
                CalculatorTools.calculate
            ],
            allow_delegation=False
        )
