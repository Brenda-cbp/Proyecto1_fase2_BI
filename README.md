# Proyecto 1 Fase 2 - Inteligencia de Negocios
### Sofía Álvarez, Brenda Barahona y Álvaro Plata

Este repositorio contiene todos los entregables necesarios para la ejecución de la fase 2 del proyecto 1 de Inteligencia de Negocios, en el que se construyó una aplicación web con el fin de apoyar en el diagnóstico médico de enfermedades de 5 tipos (neoplasias, enfermedades del sistema digestivo, enfermedades del sitema nervioso, enfermedades cardiovasculares y patologías generales) en un hospital.

### Estructura del repositorio

El proyecto tiene 4 carpetas:
* La carpeta <code>back</code>, contiene todo el código necesario para desplegar el back de la aplicación: allí se encuentra el despliegue del API usando el _framework_ de FastAPI. En dicha carpeta, se encuentra el archivo <code>main.py</code>, donde podrá visualizar el endpoint implementado. También puede encontrar el archivo <code>dataModel.py</code>, con un modelo de datos, de acuerdo a lo que se espera reciba el modelo de Machine Learning. El archivo <code>clases.py</code> contiene las transformaciones personalizadas que se implementaron sobre el pipeline (i.e. limpieza de ruido, stemming, lematización, vectorización y creación del modelo de Keras), que son necesarias para que el modelo pueda ser cargado exitosamente.
* La carpeta <code>app</code>, contiene la aplicación web (el front) desarrollado en Angular, con la cual los usuarios/roles definidos interactuarán.
* La carpeta <code>notebooks</code>, contiene el notebook (y otras dependencias necesarias - como el archivo <code>clases.py</code>) necesarias para crear el pipeline que contiene el modelo.
* La carpeta <code>docs</code>, contiene el informe, la presentación y el link al video realizado para este proyecto. Es importante mencionar que el informe tiene también el avance en el bono de expertos.

### Instrucciones de ejecución

Debido a que se utilizó una gran cantidad de librerías, e incluso modelos preentrenados para la vectorización de textos (que pesa aproximadamente 20 GB), la instalación del proyecto puede ser un poco demorada. Por tanto, se implementó un script de <code>bash</code> para facilitar el proceso de instalación, este se denomina <code>RUNME.sh</code>. Para ejecutarlo, únicamente corra el comando <code>./RUNME.sh</code>. Corriendo esto, ya tendrá todas las librerías necesarias para ejecutar el proyecto.

<b>Para ejecutar el back:</b> En la carpeta back del proyecto, ejecute el comando <code>uvicorn main:app --reload</code> para correr el servicio de forma local.
<b>Para ejecutar el front:</b> En la carpeta app del proyecto, ejecute el comando <code>npm i </code> seguido de <code>ng serve</code>. Asegúrese de tener <code>node</code> y <code>angular</code> instalados.


