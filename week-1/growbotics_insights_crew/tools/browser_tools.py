import os
import requests
from bs4 import BeautifulSoup  # Assuming BeautifulSoup is suitable for your HTML content processing
from crewai import Agent, Task
from langchain.tools import tool
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class BrowserTools:

    @tool("Scrape website content")
    def scrape_and_summarize_website(website):
        """Useful to scrape and summarize website content or PDF documents"""
        browserless_url = os.getenv('BROWSERLESS_URL', 'http://localhost:3000/content')
        browserless_token = os.getenv('BROWSERLESS_TOKEN', 'default-token')
        
        # Update the URL to point to your locally running Browserless instance for PDF or complex HTML
        url = f"{browserless_url}?token={browserless_token}"
        headers = {'User-Agent': 'Mozilla/5.0'}

        # Decide how to process the URL based on content type or specific requirements
        response = requests.get(website, headers=headers)
        
        if website.lower().endswith('.pdf'):
            # For PDFs, assuming Browserless can handle or convert PDF content to text
            # This part needs adjustment based on how Browserless returns PDF content
            content = response.text  # Placeholder, adjust based on actual response handling for PDF
        else:
            # For HTML content, using BeautifulSoup to extract text
            soup = BeautifulSoup(response.text, 'html.parser')
            paragraphs = soup.find_all('p')
            content = "\n\n".join([p.text for p in paragraphs])

        content_chunks = [content[i:i + 8000] for i in range(0, len(content), 8000)]

        summaries = []
        for chunk in content_chunks:
            logging.info(f"Processing chunk: {chunk[:100]}...")  # Logging a portion of the chunk

            agent = Agent(
                role='Web Content Analyst',
                goal='To analyze and extract essential information from web pages and documents.',
                backstory="Specializing in the extraction of meaningful insights from diverse web sources.",
                verbose=True,
                allow_delegation=False
            )

            task = Task(
                description='Analyze and summarize the web content.',
                expected_output='A concise summary of the essential information from the web content.',
                agent=agent
            )
            # Assuming you have a way to execute the task and get a summary
            # summary = task.execute()  # This line assumes you have a mechanism to execute the task
            summaries.append("summary placeholder")  # Replace with actual summary from task execution
        
        return "\n\n".join(summaries)
