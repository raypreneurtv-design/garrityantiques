"""
Utility script template for the execution layer.

This script demonstrates the standard structure for execution scripts:
- Load environment variables from .env
- Clear input/output interface
- Error handling with meaningful messages
- Return structured results
"""

import os
import sys
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()


def main(input_data: dict) -> dict:
    """
    Main execution function.
    
    Args:
        input_data: Dictionary containing required inputs
            - example_key: Description of the input
    
    Returns:
        Dictionary with results:
            - success: bool
            - data: Any processed data
            - error: Optional error message
    """
    try:
        # Validate inputs
        if "example_key" not in input_data:
            return {
                "success": False,
                "data": None,
                "error": "Missing required input: example_key"
            }
        
        # Process the work
        result = f"Processed: {input_data['example_key']}"
        
        return {
            "success": True,
            "data": result,
            "error": None
        }
        
    except Exception as e:
        return {
            "success": False,
            "data": None,
            "error": str(e)
        }


if __name__ == "__main__":
    # Example usage
    test_input = {"example_key": "test_value"}
    result = main(test_input)
    print(result)
