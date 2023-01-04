/*

Primera parte:

    Crear una función con tres parámetros que sean números que se suman entre sí.

    Llamar a la función en el main y darle valores.

Segunda parte:

    Crear una clase coche.

    Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

    Una función que incremente el número de puertas que tiene el coche.

    Crear un objeto miCoche en el main y añadirle una puerta.

    Mostrar el número de puertas que tiene el objeto.



 */


public class Main {
    public static void main(String[] args) {

        System.out.println("sumaTres( 1 , 2 , 3 ): "+sumaTres(1,2,3));

        Coche miCoche=new Coche(0);

        System.out.println("miCoche.numPuertas:"+miCoche.numPuertas);

        miCoche.incrementaPuertas(1);

        System.out.println("miCoche.numPuertas:"+miCoche.numPuertas);
    }

    public static int sumaTres(int a, int b, int c){

        return  a+b+c;
    }
}

class Coche{
    public int numPuertas;

    public Coche(int numPuertas){
        this.numPuertas=numPuertas;
    }

    public void incrementaPuertas(int n){
        this.numPuertas+=n;
    }

}