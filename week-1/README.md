# Week 1: The Future of Food - Insights into Robotics in Urban & Small-Scale Farming

![Cover Image](98c7efc2-41ac-408e-938d-47fc5763db97_1024x1024.webp)

Welcome to Week 1 of the [**One-Person Unicorn Experiment**](https://solounicorn.substack.com/). This week's exploration focuses on harnessing robotics in agriculture for sustainable and diverse farming solutions.

## About This Week's Exploration

In this folder, you'll find the code and resources used to explore the potential of robotic farming. This includes an experiment in communication with AI through Telegram for feedback and insights, as well as a deep dive into market analysis through our `growbotics_insights_crew`.

### Key Components

- [`human_feedback_api.py`](human_feedback_api.py): An experiment to create an API that allows sending Telegram messages and receiving feedback. This tool utilized Smee for setting up webhooks. Example to start Smee:
    ```shell
    # Example command to start Smee
    smee -u https://smee.io/yourUniqueSmeeChannel -t http://localhost:8080
    ```
- **Example Response**: The example response from this experiment can be found in [`test_telegram_crew_response.txt`](test_telegram_crew_response.txt).
- **CrewAI Feature Exploration**: We explored the integration of human input via the Telegram tool for added flexibility in CrewAI's execution, enhancing its decision-making capabilities.
- **Marketing Analysis**: The market analysis mentioned in the blog was conducted with our custom crew, `growbotics_insights_crew`, using the web browsing tool Browserless. To start the Browserless Docker container locally:
    ```shell
    docker run \
      --rm \
      -p 3000:3000 \
      -e "CONCURRENT=10" \
      -e "TOKEN=6R0W53R135510" \
      ghcr.io/browserless/chromium
    ```
  The raw output of this analysis is documented in [report.txt](growbotics_insights_crew/report.txt), with a formatted report available in [README.md](growbotics_insights_crew/README.md).


## Blog Reference

For a detailed account of this week's journey and insights, refer to our blog post: [Week 1: The Future of Food - Insights into Robotics in Urban & Small-Scale Farming](https://open.substack.com/pub/solounicorn/p/week-1-the-future-of-food-insights?r=i8zum&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true).

### Explore the Code

Dive into the code, share your insights, and join us in this exploration of robotics in agriculture. Your feedback and contributions are welcomed as we continue to explore the vast potential of AI in shaping the future of farming.
