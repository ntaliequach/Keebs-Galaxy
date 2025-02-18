from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class RecommendationRequest(BaseModel):
    preferences: dict

@app.post("/recommend-keyboard")
def recommend_keyboard(request: RecommendationRequest):
    # Sample AI recommendation logic
    return {"build": "Keeb Model X", "details": "Optimized for performance and style."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
