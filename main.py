import pickle
import fastapi
import pandas as pd
from typing import Optional
from pandas import json_normalize
from dataModel import DataModel, DataModelList
from dataModel import DataEsperadaLista
from joblib import load

app = fastapi.FastAPI(title= "Proyecto 1 Fase 2 BI", description="Realizado por Sofía Alvarez, Brenda Barahona, Alvaro Plata ", version="2.0.1")


@app.get("/")
def read_root():
 return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
 return {"item_id": item_id, "q": q}

@app.post("/predict")
def make_predictions(dataModel: DataModel):
    diccionario = fastapi.encoders.jsonable_encoder(dataModel)
    df = json_normalize(diccionario['data']) 
    df.columns = DataModel.columns()
    model = load("assets/modelo.pkl")
    print(model)
    result = model.predict(df)
    lista = result.tolist()
    json_prediccion = json.dumps(lista)
    return {"predict": json_prediccion}
