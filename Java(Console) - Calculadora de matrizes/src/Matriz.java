import java.util.Scanner;

public class Matriz {
    private String nome;
    private int linhas, colunas;
    private float[][] elementos;
    private String tipoTamanho, tipoElementos;
    private float determinante;

    public Matriz(String nome, int linhas, int colunas) {
        setNome(nome);
        setLinhas(linhas);
        setColunas(colunas);
    }

    public String getNome() {
        return this.nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getLinhas() {
        return this.linhas;
    }
    public void setLinhas(int linhas) {
        this.linhas = linhas;
    }

    public int getColunas() {
        return this.colunas;
    }
    public void setColunas(int colunas) {
        this.colunas = colunas;
    }

    public float[][] getElementos() {
        return this.elementos;
    }
    public void setElementos(float[][] elementos) {
        this.elementos = elementos;
    }
    public void setElementos() {
        Scanner scan = new Scanner(System.in);

        float[][] matrizResultante = new float[getLinhas()][getColunas()];
        for (int i = 0; i < getLinhas(); i++) {
            for (int j = 0; j < getColunas(); j++) {
                System.out.printf("Matriz " + getNome() + "[%d][%d]: ", i + 1, j + 1);
                matrizResultante[i][j] = scan.nextFloat();
            }
        }

        this.elementos = matrizResultante;
        System.out.println();
    }

    public String getTipoTamanho() {
        return this.tipoTamanho;
    }
    public void setTipoTamanho() {
        if (this.getLinhas() == this.getColunas()){
            this.setDeterminante(elementos);
            this.tipoTamanho = "Quadrada/Det = " + getDeterminante();
        }
        else if (this.getLinhas() == 1) {
            this.tipoTamanho = "Linha";
        }
        else if (this.getColunas() == 1) {
            this.tipoTamanho = "Coluna";
        }
    }

    public String getTipoElementos() {
        return this.tipoElementos;
    }
    public void setTipoElementos() {
        //Descobrir se cada elemento da matriz é igual a zero.
        int contador1 = 0;
        for (int i = 0; i < this.getElementos().length; i++) {
            for (int j = 0; j < this.getElementos()[0].length; j++) {
                if (this.getElementos()[i][j] == 0){
                    contador1 += 1;
                }
            }
        }
        if (contador1 == (this.getElementos().length * this.getElementos()[0].length)) {
            this.tipoElementos = "Nula";
        }

        //Se matriz quadrada
        //Descobrir se os elementos da diagonal principal são iguais a um, e os demais elementos iguais a zero.
        if (this.getTipoTamanho() != null && this.getTipoTamanho().contains("Quadrada")) {
            int contador2 = 0, contador3 = 0;
            for (int i = 0; i < this.getElementos().length; i++) {
                for (int j = 0; j < this.getElementos()[0].length; j++) {
                    if (i == j) {
                        if (this.getElementos()[i][j] == 1) {
                            contador2 += 1;
                        }
                    }
                    else {
                        if (this.getElementos()[i][j] == 0) {
                            contador3 += 1;
                        }
                    }
                }
            }
            if (contador2 == getElementos().length &&
                    contador3 == ((getElementos()[0].length - 1) * getElementos().length)) {
                this.tipoElementos = "Identidade";
            }
        }
    }

    public float getDeterminante() {
        return this.determinante;
    }
    public void setDeterminante(float[][] matriz){
        Calculos calcular = new Calculos();
        this.determinante = calcular.determinante(matriz);
    }
}