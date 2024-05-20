def redistribuir_pesos():
    #Input(quantidade de camelos)
    while True:
        N = int(input("Digite o número de camelos: "))
        if 1 <= N <= 1000:
            break
        else:
            print("O número de camelos deve estar entre 1 e 1000. Tente novamente.")
    
    #Input(pesos carregados)
    pesos = []
    for i in range(N):
        while True:
            peso = int(input(f"Peso do camelo {i + 1}: "))
            if 1 <= peso <= 10000:
                pesos.append(peso)
                break
            else:
                print("O peso deve estar entre 1 e 10000. Tente novamente.")

    #Cálculos
    peso_total = sum(pesos)
    peso_medio = peso_total // N

    ajustes = [peso_medio - peso for peso in pesos]
    
    #Output
    print("\nAjustes necessários para cada camelo:")
    for ajuste in ajustes:
        print(ajuste)

if __name__ == "__main__":
    redistribuir_pesos()
