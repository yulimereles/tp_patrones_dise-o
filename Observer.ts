interface Observador {
    notificar(cambio: string): void;
}

class Soporte implements Observador {
    notificar(cambio: string): void {
        console.log(`Soporte notificado: ${cambio}`);
    }
}

class EquipoConcreto {
    private observadores: Observador[] = [];

    constructor(public nombre: string, public tipo: string, public estado: string) {}

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    notificarObservadores(): void {
        const mensaje = `${this.nombre} ha cambiado su estado a ${this.estado}`;
        this.observadores.forEach(obs => obs.notificar(mensaje));
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
}

const soporte = new Soporte();
const equipo = new EquipoConcreto("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
