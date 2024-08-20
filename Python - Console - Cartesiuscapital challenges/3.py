def generate_fantastic_square(N):
    # Inicializamos o quadrado com zeros
    square = [[0] * N for _ in range(N)]
    
    # Mantemos um conjunto de números usados
    used_numbers = set()

    # Coordenadas do próximo número a ser colocado no quadrado
    i, j = 0, 0

    # Números a serem colocados no quadrado
    num = 1

    # Preenchemos o quadrado sem repetir números
    while num <= N * N:
        # Se o número já estiver no conjunto de números usados, avançamos para o próximo
        while num in used_numbers:
            num += 1
        
        # Colocamos o número no quadrado e o adicionamos ao conjunto de números usados
        square[i][j] = num
        used_numbers.add(num)

        # Atualizamos as coordenadas para o próximo número
        i, j = (i + 1) % N, (j + 1) % N

    return square

def print_square(square):
    for row in square:
        print(" ".join(map(str, row)))

if __name__ == "__main__":
    N = int(input("Digite o valor de N (1 ≤ N ≤ 40): ").strip())
    
    if 1 <= N <= 40:
        fantastic_square = generate_fantastic_square(N)
        print_square(fantastic_square)
    else:
        print("O valor de N deve estar entre 1 e 40.")
