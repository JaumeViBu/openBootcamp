public class Main {
    public static void main(String[] args) {

        Persona adam=new Persona();

        adam.setEdad(57);
        adam.setNombre("Adam");
        adam.setTelefono("000 00 00 00");

        System.out.println("Contenido de adam:");
        System.out.println("adam.nombre: "+adam.getNombre());
        System.out.println("adam.edad: "+adam.getEdad());
        System.out.println("adam.telefono: "+adam.getTelefono());
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