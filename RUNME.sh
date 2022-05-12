#!/bin/sh
# Para la instalacion de librerias
# Instalacion de sent2vec
git clone https://github.com/epfml/sent2vec.git
cd sent2vec
make
pip install . 
cd ..
# Instalacion del resto de librerias
pip install -r requirements.txt 
# Descarga del modelo preentrenado
# NOTA: Este modelo pesa 20 GB.
cd notebooks
wget https://ftp.ncbi.nlm.nih.gov/pub/lu/Suppl/BioSentVec/BioSentVec_PubMed_MIMICIII-bigram_d700.bin