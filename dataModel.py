from pydantic import BaseModel
from typing import List

class DataModel(BaseModel):
# Estas varibles permiten que la librería pydantic haga el parseo entre el
#Json recibido y el modelo declarado.
 medical_abstracts: str

#Esta función retorna los nombres de las columnas correspondientes con el
#modelo esxportado en joblib.
 def columns(self):
    return ["medical_abstracts"] 

# Clase DataModelList
class DataModelList(BaseModel):

    # Está varible permiten que la librería pydantic haga el parseo entre el Json recibido y el modelo declarado
    data: List[DataModel]

class DataEsperada(BaseModel):

# Estas varibles permiten que la librería pydantic haga el parseo entre el Json recibido y el modelo declarado.
    problems_described:float

#Esta función retorna los nombres de las columnas correspondientes con el modelo esxportado en joblib.
    def columns():
        return ["problems_described"]

class DataEsperadaLista(BaseModel):
    dataEsperada : List[DataEsperada]