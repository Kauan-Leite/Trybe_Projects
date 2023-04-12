import pandas as pd

friends = {
    "nome": ["Davi", "Diego", "Samuel", "Pedro"],
    "prato_favorito": ["Lasanha", "Sushi", "Churrasco", "Strogonoff"],
    "sobremesa_favorita": ["Mousse", "Brigadeiro", "Pudim", "Alfajor"]
}

another_dataframe = pd.DataFrame(friends)

# print(another_dataframe)

nomes = another_dataframe["nome"]
prato_fav = another_dataframe["prato_favorito"]
sobremesa_fav = another_dataframe["sobremesa_favorita"]


print(nomes)
print(prato_fav)
print(sobremesa_fav)
