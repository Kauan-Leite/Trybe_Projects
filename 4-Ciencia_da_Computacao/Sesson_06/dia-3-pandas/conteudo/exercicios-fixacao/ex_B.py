import pandas as pd

dados = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62]
}

my_df = pd.DataFrame(dados)

print('Quantas Linhas e Colunas tem no DataFrame?')
print(my_df.shape)

print('\nTem Valores Nulos no DataFrame?')
print(my_df.info())

print('\nQual o número médio de pessoas em situação de rua por região do Brasil em nosso DataFrame?')
print(my_df.describe())

print('\nQual região tem proporcionalmente a maior quantidade de pessoas nessa situação? E qual tem menos?')
print(my_df.describe())