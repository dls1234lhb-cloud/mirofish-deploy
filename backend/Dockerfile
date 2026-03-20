FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .

# Install all packages EXCEPT camel-ai and camel-oasis first
RUN pip install --no-cache-dir \
    flask>=3.0.0 \
    flask-cors>=6.0.0 \
    openai>=1.0.0 \
    "zep-cloud==3.13.0" \
    PyMuPDF>=1.24.0 \
    charset-normalizer>=3.0.0 \
    chardet>=5.0.0 \
    python-dotenv>=1.0.0 \
    "pydantic>=2.0.0"

# Install camel-oasis without its heavy optional dependencies
RUN pip install --no-cache-dir --no-deps "camel-oasis==0.2.5"

# Install camel-ai without PyTorch and other heavy optional deps
RUN pip install --no-cache-dir --no-deps "camel-ai==0.2.78"

# Install only the required runtime deps for camel-ai
RUN pip install --no-cache-dir \
    astor \
    colorama \
    docstring-parser \
    httpx \
    jsonschema \
    mcp \
    pillow \
    psutil \
    tiktoken \
    websockets

# Copy application code
COPY . .

# Expose port
EXPOSE 5001

# Start command
CMD ["python", "run.py"]
