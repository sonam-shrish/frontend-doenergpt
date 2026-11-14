import os
from openai import OpenAI
from dotenv import load_dotenv
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Initialize OpenAI client
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    logger.error("❌ No OpenAI API key found in environment variables!")
    raise ValueError("OpenAI API key not found. Please set OPENAI_API_KEY in your .env file or environment variables.")

client = OpenAI(api_key=api_key)

async def handlePrompt(prompt: str):
    try:
        logger.info(f"🚀 Processing prompt: {prompt[:50]}...")
        
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        
        logger.info("✅ Successfully received response from OpenAI")
        return response.choices[0].message.content
        
    except Exception as e:
        logger.error(f"❌ Error processing prompt: {str(e)}")
        raise 