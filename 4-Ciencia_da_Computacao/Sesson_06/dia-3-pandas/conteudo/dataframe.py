import pandas as pd

def calcula_situacao(media):
    return 'Aprovado' if media >= 7 else 'Reprovado'

dicinario_de_notas = {
    "nome": ["Maria", "João", "Fernanda", "Tulio"],
    "primeira_nota": [9, 9, 7, 8],
    "segunda_nota": [8, 7, 9, 3]
}

meu_primeiro_dataframe = pd.DataFrame(dicinario_de_notas)

meu_primeiro_dataframe["media"] = (meu_primeiro_dataframe["primeira_nota"] + meu_primeiro_dataframe["segunda_nota"]) / 2

meu_primeiro_dataframe["situacao"] = meu_primeiro_dataframe["media"].apply(calcula_situacao)

print(meu_primeiro_dataframe)