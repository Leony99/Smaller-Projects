def encontrar_a_menor_A(N, digitos):
    #Função para verificar se uma sequência pode ser gerada a partir de A
    def pode_gerar_sequencia(current_A):
        i = 0
        while i < len(digitos):
            if not digitos.startswith(current_A, i):
                return False
            i += len(current_A)
            current_A = str(int(current_A) + 1)
        return True

    #Tentar formar o menor A possível
    for length in range(1, len(digitos) + 1):
        current_A = digitos[:length]
        if pode_gerar_sequencia(current_A):
            return current_A

    return None

if __name__ == "__main__":
    #Input
    while True:
        N = int(input("Digite a quantidade de dígitos (1 ≤ N ≤ 1000): "))
        if 1 <= N <= 1000:
            break
        else:
            print("Número de dígitos deve estar entre 1 e 1000. Tente novamente.")

    di = ''.join(input("Insira os dígitos: ").strip().split())

    #Encontrar e imprimir o menor A possível
    menor_A = encontrar_a_menor_A(N, di)
    print("\nMenor A: ", menor_A)