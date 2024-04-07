import os
import logging
import requests
from crewai import Agent, Task, Crew
from crewai_tools import tool  # Corrected import based on your project structure

# Load API keys from environment variables
TELEGRAM_BOT_API_URL = os.getenv("TELEGRAM_BOT_API_URL")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")  # Placeholder for potential future use

logging.basicConfig(level=logging.DEBUG)

@tool("Ask human for an opinion")
def human_feedback(question, responses=None):
    """
    Sends a question to humans via the Telegram API and collects their responses. This tool
    is designed to facilitate quick and straightforward feedback on any given query, leveraging
    the power of human insight for validation or exploration.

    It's strongly recommended to provide a list of short, concise responses. These responses will
    be presented as buttons, making it easier for users to provide their opinions. Short, one-word
    answers are ideal (e.g., "Yes", "No", "Maybe"), as they fit easily on buttons and ensure clarity
    and quick interaction. This structured approach to collecting feedback can dramatically streamline
    the analysis of responses and enable more efficient decision-making.

    Parameters:
    - question (str): The specific question you want to ask.
    - responses (list of str, optional): Short, one-word responses that guide the feedback
      process. Including options like ["Yes", "No", "Maybe"] can make it easier for
      people to respond and for you to categorize feedback. If this is left empty, respondents
      will provide open-ended feedback, which may be harder to interpret quickly.
    """
    logging.debug(f"human_feedback invoked with question: '{question}', responses: {responses}")
    url = f"{TELEGRAM_BOT_API_URL}/ask"
    headers = {'accept': 'application/json'}
    data = {'question': question, 'responses': responses or []}

    try:
        response = requests.post(url, headers=headers, json=data)
        logging.debug(f"Request made to {url} with data: {data}")

        if response.status_code == 200:
            logging.debug("human_feedback completed successfully")
            response_data = response.json()
            return response_data.get("response", "No response received")
        else:
            error_message = f"Error: {response.status_code} - {response.text}"
            logging.error("human_feedback encountered an error: " + error_message)
            return error_message
    except Exception as e:
        logging.error(f"Exception during human_feedback: {e}")
        return str(e)

# Define a single agent with a backstory, mimicking your successful setup
agent = Agent(
  role='Inquisitive Agent',
  goal='Ask a human for their opinion on {topic}',
  backstory=(
    "Curiosity drives you as an Inquisitive Agent, always seeking human perspectives "
    "to better understand and contextualize your findings. With a deep belief in the value "
    "of diverse opinions, you leverage the human_feedback tool to enrich your research "
    "and ensure it's grounded in real-world perspectives."
  ),
  verbose=True,
  memory=False,
  tools=[human_feedback],
  allow_delegation=False
)

# Define a simple task
task = Task(
  description="Use the human_feedback tool to ask a question about {topic}.",
  expected_output="A human's opinion on {topic}.",
  tools=[human_feedback],
  agent=agent,
)

# Set up and execute the crew without the 'process' parameter
crew = Crew(
  agents=[agent],
  tasks=[task],
  memory=False,  # Assuming memory and cache settings are not applicable or default to False
  cache=False,
  max_rpm=100,  # This parameter may or may not be needed depending on your specific version of crewai
  verbose=2  # Adjusted to match your successful setup
)

if __name__ == "__main__":
    result = crew.kickoff(inputs={'topic': 'the importance of AI in modern society'})
    print(result)

