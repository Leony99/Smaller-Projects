import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        Scanner scan = new Scanner(System.in);
        Calculos calcular = new Calculos();
        ArrayList<Matriz> matrizes = new ArrayList<>();
        String string1, string2;
        int opcaoMenu, int1, int2;

        do {
            mostrarMatrizes(matrizes);
            System.out.println("------------MENU------------");
            System.out.println("1 - Criar matriz");
            System.out.println("2 - Excluir matriz");
            System.out.println("----------------------------");
            System.out.println("3 - Transpor matriz");
            System.out.println("4 - Opor matriz");
            System.out.println("----------------------------");
            System.out.println("5 - Multiplicar por número real");
            System.out.println("6 - Somar matrizes");
            System.out.println("7 - Subtrair matrizes");
            System.out.println("8 - Multiplicar matrizes");
            System.out.println("----------------------------");
            System.out.println("9 - Sair\n");
            System.out.print("Insira a opção: ");
            opcaoMenu = scan.nextInt();

            switch (opcaoMenu) {
                case 1:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações da matriz***
                    System.out.println("-------CRIAR MATRIZ-------\n");
                    System.out.print("Informe o nome da matriz: ");
                    string1 = scan.next();
                    System.out.print("Informe o número de linhas da matriz: ");
                    int1 = scan.nextInt();
                    System.out.print("Informe o número de colunas da matriz: ");
                    int2 = scan.nextInt();
                    System.out.println();
                    //***Informações da matriz***

                    //Nome inválido:
                    if (procurarIndex(matrizes, string1) != -1) {
                        System.out.println("Nome já existente!\n");
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nome válido***
                    Matriz matriz = new Matriz(string1, int1, int2);
                    matriz.setElementos();
                    matriz.setTipoTamanho();
                    matriz.setTipoElementos();
                    salvarMatriz(matrizes, matriz);
                    //***Nome válido***

                    voltarMenu();
                    limpar();
                    break;
                case 2:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações da matriz***
                    System.out.println("-------EXCLUIR MATRIZ-------\n");
                    System.out.print("Insira o nome da matriz que deseja excluir: ");
                    string1 = scan.next();
                    int1 = procurarIndex(matrizes, string1);
                    System.out.println();
                    //***Informações da matriz***

                    //Nome inválido:
                    if (int1 == -1) {
                        System.out.println("Matriz não encontrada!\n");
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nome válido***
                    matrizes.remove(int1);
                    System.out.println("Matriz excluída com sucesso!\n");
                    //***Nome válido***

                    voltarMenu();
                    limpar();
                    break;
                case 3:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações da matriz***
                    System.out.println("-------TRANSPOR MATRIZ-------\n");
                    System.out.print("Insira o nome da matriz que deseja transpor: ");
                    string1 = scan.next();
                    int1 = procurarIndex(matrizes, string1);
                    System.out.println();
                    //***Informações da matriz***

                    //Nome inválido:
                    if (int1 == -1) {
                        System.out.println("Matriz não encontrada!\n");
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nome válido***
                    Matriz matrizTransposta = new Matriz
                            (string1 + "(transposta)",
                            matrizes.get(int1).getColunas(),
                            matrizes.get(int1).getLinhas());
                    matrizTransposta.setElementos(calcular.transporMatriz(matrizes.get(int1)));
                    matrizTransposta.setTipoTamanho();
                    matrizTransposta.setTipoElementos();
                    salvarMatriz(matrizes, matrizTransposta);
                    //***Nome válido***

                    voltarMenu();
                    limpar();
                    break;
                case 4:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações da matriz***
                    System.out.println("-------OPOR MATRIZ-------\n");
                    System.out.print("Insira o nome da matriz que deseja opor: ");
                    string1 = scan.next();
                    int1 = procurarIndex(matrizes, string1);
                    System.out.println();
                    //***Informações da matriz***

                    //Nome inválido:
                    if (int1 == -1) {
                        System.out.println("Matriz não encontrada!\n");
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nome válido***
                    Matriz matrizOposta = new Matriz
                            (string1 + "(oposta)",
                            matrizes.get(int1).getLinhas(),
                            matrizes.get(int1).getColunas());
                    matrizOposta.setElementos(calcular.oporMatriz(matrizes.get(int1)));
                    matrizOposta.setTipoTamanho();
                    matrizOposta.setTipoElementos();
                    salvarMatriz(matrizes, matrizOposta);
                    //***Nome válido***

                    voltarMenu();
                    limpar();
                    break;
                case 5:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações da matriz***
                    System.out.println("-------MULTIPLICAR MATRIZ POR NÚMERO REAL-------\n");
                    System.out.print("Insira o nome da matriz que deseja multiplicar: ");
                    string1 = scan.next();
                    int1 = procurarIndex(matrizes, string1);
                    System.out.print("Insira o número a multiplicar: ");
                    float n = scan.nextFloat();
                    System.out.println();
                    //***Informações da matriz***

                    //Nome inválido:
                    if (int1 == -1) {
                        System.out.println("Matriz não encontrada!\n");
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nome válido***
                    Matriz matrizMultiplicada = new Matriz
                            (string1 + "x" + n,
                            matrizes.get(int1).getLinhas(),
                            matrizes.get(int1).getColunas());
                    matrizMultiplicada.setElementos(calcular.multiplicarPorNumero(matrizes.get(int1), n));
                    matrizMultiplicada.setTipoTamanho();
                    matrizMultiplicada.setTipoElementos();
                    salvarMatriz(matrizes, matrizMultiplicada);
                    //***Nome válido***

                    voltarMenu();
                    limpar();
                    break;
                case 6:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações das matrizes***
                    System.out.println("-------SOMAR MATRIZES-------\n");
                    System.out.print("Insira o nome da primeira matriz: ");
                    string1 = scan.next();
                    int1 = procurarIndex(matrizes, string1);
                    System.out.print("Insira o nome da segunda matriz: ");
                    string2 = scan.next();
                    int2 = procurarIndex(matrizes, string2);
                    System.out.println();
                    //***Informações das matrizes***

                    //Nomes inválidos:
                    if (nomesInvalidos(int1, int2)) {
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nomes válidos***
                    Matriz matrizSoma = new Matriz
                            (string1 + "+" + string2,
                            matrizes.get(int1).getLinhas(),
                            matrizes.get(int2).getColunas());
                    matrizSoma.setElementos
                            (calcular.somarMatrizes(matrizes.get(int1), matrizes.get(int2)));
                    //Soma impossível:
                    if (matrizSoma.getElementos() == null) {
                        voltarMenu();
                        limpar();
                        break;
                    }
                    matrizSoma.setTipoTamanho();
                    matrizSoma.setTipoElementos();
                    salvarMatriz(matrizes, matrizSoma);
                    //***Nomes válidos***

                    voltarMenu();
                    limpar();
                    break;
                case 7:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações das matrizes***
                    System.out.println("-------SUBTRAIR MATRIZES-------\n");
                    System.out.print("Insira o nome da primeira matriz: ");
                    string1 = scan.next();
                    int1 = procurarIndex(matrizes, string1);
                    System.out.print("Insira o nome da segunda matriz: ");
                    string2 = scan.next();
                    int2 = procurarIndex(matrizes, string2);
                    System.out.println();
                    //***Informações das matrizes***

                    //Nomes inválidos:
                    if (nomesInvalidos(int1, int2)) {
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nomes válidos***
                    Matriz matrizSubtracao = new Matriz
                            (string1 + "-" + string2,
                            matrizes.get(int1).getLinhas(),
                            matrizes.get(int2).getColunas());
                    matrizSubtracao.setElementos
                            (calcular.subtrairMatrizes(matrizes.get(int1), matrizes.get(int2)));
                    //Subtração impossível:
                    if (matrizSubtracao.getElementos() == null) {
                        voltarMenu();
                        limpar();
                        break;
                    }
                    matrizSubtracao.setTipoTamanho();
                    matrizSubtracao.setTipoElementos();
                    salvarMatriz(matrizes, matrizSubtracao);
                    //***Nomes válidos***

                    voltarMenu();
                    limpar();
                    break;
                case 8:
                    limpar();
                    mostrarMatrizes(matrizes);

                    //***Informações das matrizes***
                    System.out.println("-------MULTIPLICAR MATRIZES-------\n");
                    System.out.print("Insira o nome da primeira matriz: ");
                    string1 = scan.next();
                    int1 = procurarIndex(matrizes, string1);
                    System.out.print("Insira o nome da segunda matriz: ");
                    string2 = scan.next();
                    int2 = procurarIndex(matrizes, string2);
                    System.out.println();
                    //***Informações das matrizes***

                    //Nomes inválidos:
                    if (nomesInvalidos(int1, int2)) {
                        voltarMenu();
                        limpar();
                        break;
                    }

                    //***Nomes válidos***
                    Matriz matrizMultiplicacao = new Matriz
                            (string1 + "." + string2,
                            matrizes.get(int1).getLinhas(),
                            matrizes.get(int2).getColunas());
                    matrizMultiplicacao.setElementos
                            (calcular.multiplicarMatrizes(matrizes.get(int1), matrizes.get(int2)));
                    //Multiplicação impossível:
                    if (matrizMultiplicacao.getElementos() == null) {
                        voltarMenu();
                        limpar();
                        break;
                    }
                    matrizMultiplicacao.setTipoTamanho();
                    matrizMultiplicacao.setTipoElementos();
                    salvarMatriz(matrizes, matrizMultiplicacao);
                    //***Nomes válidos***

                    voltarMenu();
                    limpar();
                    break;
                case 9:
                    break;
                default:
                    System.out.println("Opção não encontrada!\n");
                    voltarMenu();
                    limpar();
                    break;
            }
        }
        while (opcaoMenu != 9);
    }

    //Mostrar matriz única
    private static void mostrarMatriz(Matriz matriz){
        //Mostrar nome, tamanho e tipo da matriz
        System.out.print("Matriz [" + matriz.getNome() + "]" +
                " - " + matriz.getLinhas() + "x" + matriz.getColunas());
        if (matriz.getTipoTamanho() != null && matriz.getTipoElementos() != null) {
            System.out.println(" - Matriz " + matriz.getTipoTamanho() + " e " + matriz.getTipoElementos() + ":");
        }
        else if (matriz.getTipoTamanho() != null) {
            System.out.println(" - Matriz " + matriz.getTipoTamanho() + ":");
        }
        else if (matriz.getTipoElementos() != null) {
            System.out.println(" - Matriz " + matriz.getTipoElementos() + ":");
        }
        else {
            System.out.println(" - Matriz Normal:");
        }

        //Mostrar elementos
        for (int i = 0; i < matriz.getElementos().length; i++) {
            for (int j = 0; j < matriz.getElementos()[0].length; j++) {
                if (j != 0) {
                    System.out.print("\t");
                }
                if (checarInt(matriz.getElementos()[i][j])) {
                    System.out.printf("%-8.0f",matriz.getElementos()[i][j]);
                }
                else {
                    System.out.printf("%-8.2f",matriz.getElementos()[i][j]);
                }
            }
            System.out.println();
        }
        System.out.println();
    }

    //Mostrar todas as matrizes contidas na lista
    private static void mostrarMatrizes(List<Matriz> matrizes){
        System.out.println("----------MATRIZES----------\n");
        if (matrizes.isEmpty()){
            System.out.println("Nenhuma matriz encontrada.\n");
        }
        for (Matriz matriz : matrizes){
            mostrarMatriz(matriz);
        }
    }

    //Salvar matriz na lista após a criação
    private static void salvarMatriz(List<Matriz> matrizes, Matriz matriz){
        Scanner scan = new Scanner(System.in);

        System.out.println("Matriz resultante: ");
        mostrarMatriz(matriz);
        System.out.print("Deseja salvar a matriz?(Insira '1' para salvar): ");
        int opcaoSalvar = scan.nextInt();
        if(opcaoSalvar == 1){
            matrizes.add(matriz);
            System.out.println("Matriz salva com sucesso.\n");
        }
        else {
            System.out.println();
        }
    }

    //Procurar o index da matriz na lista, utilizando o atributo nome
    private static int procurarIndex(List<Matriz> matrizes, String nome) {
        int index = -1;

        for (Matriz m : matrizes) {
            if (m.getNome().equals(nome)) {
                index = matrizes.indexOf(m);
            }
        }

        return index;
    }

    //Mensagem para matriz não encontrada na lista, utilizando index das matrizes
    private static boolean nomesInvalidos(int int1, int int2) {
        if (int1 == -1 && int2 == -1) {
            System.out.println("Matrizes não encontradas!\n");
            return true;
        }
        else if (int1 == -1) {
            System.out.println("Primeira matriz não encontrada!\n");
            return true;
        }
        else if (int2 == -1) {
            System.out.println("Segunda matriz não encontrada!\n");
            return true;
        }
        else {
            return false;
        }
    }

    //Checagem de número decimal pertencente aos inteiros, para saída de dados
    private static boolean checarInt(float f){
        int x = (int)f;
        return f - x == 0;
    }

    //Mensagem para voltar ao menu principal
    private static void voltarMenu() throws InterruptedException {
        for (int i = 3; i >= 1; i--){
            System.out.println("Voltando ao menu em " + i + " segundo(s)...");
            Thread.sleep(1000);
        }
    }

    //Limpar console para voltar ao menu principal
    private static void limpar() {
        for(int clear = 0; clear < 1000; clear++)
        {
            System.out.println("\r");
        }
    }
}