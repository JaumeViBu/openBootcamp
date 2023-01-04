
public class Main {
    public static void main(String[] args) {

        int numeroIF=0;

        if(numeroIF==0){

            System.out.println("numeroIF es igual a 0");
        }

        numeroIF=42;

        if(numeroIF>0){
            System.out.println("numeroIF ( "+numeroIF+" ) es positivo");
        }

        if(numeroIF<0){

            System.out.println("numeroIF ( "+numeroIF+" ) es negativo");
        }


        System.out.println("------------------------------------------------------------------------------");

        int numeroWhile=-10;

        while(numeroWhile<3){

            numeroWhile+=1;
            System.out.println("numeroWhile: "+numeroWhile);
        }

        System.out.println("------------------------------------------------------------------------------");

        int numeroDoWhile=-10;

        do{
            System.out.println("numeroDoWhile: "+numeroDoWhile);
        }while (numeroDoWhile>100);

        System.out.println("------------------------------------------------------------------------------");

        for (int numeroFor = 0; numeroFor <=3; numeroFor+=1) {

            System.out.println("numeroFor: "+numeroFor);
        }

        System.out.println("------------------------------------------------------------------------------");

        String estacion="atocha";

        switch (estacion.toLowerCase()){
            case "invierno":
                System.out.println("Es invierno... biruuujo...");
                break;
            case "primavera":
                System.out.println("Es primavera");
                break;
            case "verano":
                System.out.println("Es verano... en el corte inglés...");
                break;
            case "otoño":
                System.out.println("Es otolo");
                break;
            default:
                System.out.println("La variable 'estacion' no contiene una estacion válida");
        }
    }
}