import streamlit as st
import os
from fastapi import FastAPI, File, UploadFile, Form
from starlette.responses import JSONResponse

app = FastAPI()

@app.post("/predict")
async def predict_parkinsons(name: str = Form(...), age: str = Form(...), sex: str = Form(...), audio: UploadFile = File(...)):
    audio_path = f"uploads/{audio.filename}"
    with open(audio_path, "wb") as buffer:
        buffer.write(await audio.read())

    # Here, you'd process the audio file with your ML model
    prediction_result = "Positive"  # Example response

    return JSONResponse(content={"result": prediction_result})

if __name__ == "__main__":
    os.system("streamlit run app.py")
