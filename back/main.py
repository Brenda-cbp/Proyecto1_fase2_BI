import json
import pickle
import fastapi
import numpy as np
import pandas as pd
from typing import Optional
from keras.models import load_model
from dataModel import DataModel
from joblib import load
from fastapi.middleware.cors import CORSMiddleware


app = fastapi.FastAPI(title= "Proyecto 1 Fase 2 BI", description="Realizado por Sofía Alvarez, Brenda Barahona, Alvaro Plata ", version="2.0.1")

# Arreglo de las urls que pueden acceder al backend
origins = ["http://localhost:4200"]

# Manejo de las cors para habilitar los endpoints
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
 return {"Proyecto 1 Fase 2 BI": "Realizado por Sofía Alvarez, Brenda Barahona, Alvaro Plata"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
 return {"item_id": item_id, "q": q}

@app.post("/predict")
def make_predictions(dataModel: DataModel):
    #diccionario = fastapi.encoders.jsonable_encoder(dataModel)
    #print(diccionario)
    #df = json_normalize(diccionario['medical_abstracts']) 
    df = pd.DataFrame(dataModel.dict(), columns=dataModel.dict().keys(), index=[0])
    df.columns = DataModel.columns()
    model = load("../notebooks/assets/modelo.pkl")
    # Agrego el modelo de Keras que almacene previamente
    model.named_steps['model'].model = load_model('../notebooks/assets/keras_model.h5')
    result = model.predict_proba(df)
    # Sumo uno a la prediccion porque el modelo retorna como si las clases fueran de 0 a 4, no de 1 a 5. 
    lista = (np.argmax(result)+1).tolist()
    json_prediccion = json.dumps(lista)
    # Ahora, envio todas las probabilidades en otro campo. Es el campo 0 para no enviar doble lsita
    lista_2 = result.tolist()[0]
    json_probabilidades = json.dumps(lista_2)
    return {"predict": json_prediccion, "probabilities": json_probabilidades}
