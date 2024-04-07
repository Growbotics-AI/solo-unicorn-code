from crewai import Task
from textwrap import dedent

class FarmingMarketTasks():
    def market_opportunity_deep_dive(self, agent, topic):
        return Task(
            description=dedent(f"""
                Dive back into the decentralized farming market, using AI to gain insights into current trends and consumer needs. 
                Explore the potential of robotics in urban and small-scale farming, focusing on the use of decentralized robots that 
                could be open-source design and locally built using local 3D printing farms and local assemblers.

                Aim: Produce a comprehensive report on market trends, consumer needs, and the potential for robotics in enhancing sustainable farming practices.

                Topic: {topic}
                """),
            expected_output="A comprehensive report detailing current trends, consumer needs, and potential for robotics in sustainable farming.",
            agent=agent
        )

    def identifying_gaps_and_opportunities(self, agent, topic):
        return Task(
            description=dedent(f"""
                With AI's help, identify unmet needs within the market, pinpointing opportunities for innovation. Analyze the roles, 
                capabilities, and challenges of local manufacturers, assemblers, and other stakeholders in integrating and deploying 
                decentralized robotics solutions.

                Aim: Deliver a detailed analysis identifying gaps in the market and collaboration opportunities for the Growbotics AI 
                concept, specifically highlighting how decentralized robots can be tailored for local manufacturing and assembly.

                Topic: {topic}
                """),
            expected_output="An analysis report identifying market gaps, unmet needs, and opportunities for innovation in decentralized robotics.",
            agent=agent
        )

    def conceptualizing_the_solution(self, agent, topic):
        return Task(
            description=dedent(f"""
                Armed with a deeper understanding of the market and ecosystem, refine the Growbotics AI concept, aiming to develop a 
                scalable, impactful solution. Consider the feedback and input from local manufacturers, assemblers, and other stakeholders 
                to ensure the solution meets local needs and supports decentralized farming practices.

                Aim: Create a proposal for a scalable and impactful Growbotics AI solution, focusing on the practical application of 
                decentralized robots in urban and small-scale farming. The proposal should highlight the collaborative innovation process 
                and the potential for local assembly and open-source design.

                Topic: {topic}
                """),
            expected_output="A proposal document for the Growbotics AI solution, outlining its scalability, impact, and how it supports decentralized farming.",
            agent=agent
        )
