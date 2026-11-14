import asyncio
from promptHandler import handlePrompt
import logging

logger = logging.getLogger(__name__)

async def main():
    try:
        response = await handlePrompt("Hello, how are you?")
        print("🤖 AI Response:", response)
    except Exception as e:
        logger.error(f"❌ Application error: {str(e)}")

if __name__ == "__main__":
    asyncio.run(main()) 