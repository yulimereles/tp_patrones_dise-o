class InventarioViejo {
    private items: { nombre: string, tipo: string, estado: string }[] = [];

    agregarItem(item: { nombre: string, tipo: string, estado: string }): void {
        this.items.push(item);
    }

    obtenerItems(): { nombre: string, tipo: string, estado: string }[] {
        return this.items;
    }
}

class AdaptadorInventario {
    constructor(private inventarioViejo: InventarioViejo) {}

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.agregarItem({ nombre, tipo, estado });
    }

    listarEquipos(): { nombre: string, tipo: string, estado: string }[] {
        return this.inventarioViejo.obtenerItems();
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
