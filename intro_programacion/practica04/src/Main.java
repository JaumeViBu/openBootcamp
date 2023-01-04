

public class Main {
    public static void main(String[] args) {

        Cliente cliente01=new Cliente();
        cliente01.setEdad(42);
        cliente01.setNombre("Fulanito");
        cliente01.setTelefono("000 00 00 00");
        cliente01.setCredito(3457.34);

        System.out.println("Contenido de cliente01:");
        System.out.println("cliente01.edad: "+cliente01.getEdad());
        System.out.println("cliente01.nombre: "+cliente01.getNombre());
        System.out.println("cliente01.telefono: "+cliente01.getTelefono());
        System.out.println("cliente01.credito: "+cliente01.getCredito());

        Trabajador trabajador01=new Trabajador();
        trabajador01.setEdad(24);
        trabajador01.setNombre("Menganito");
        trabajador01.setTelefono("000 00 00 00");
        trabajador01.setSalario(900);

        System.out.println("Contenido de trabajador01:");
        System.out.println("trabajador01.edad: "+trabajador01.getEdad());
        System.out.println("trabajador01.nombre: "+trabajador01.getNombre());
        System.out.println("trabajador01.telefono: "+trabajador01.getTelefono());
        System.out.println("trabajador01.salario: "+trabajador01.getSalario());
    }
}

class Persona{
    private int edad;
    private String nombre;
    private String telefono;

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}

class Cliente extends Persona{
    private double credito;

    public double getCredito() {
        return credito;
    }

    public void setCredito(double credito) {
        this.credito = credito;
    }
}

class Trabajador extends Persona{
    private double salario;

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }
}