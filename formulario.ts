import axios from 'axios';

interface Producto {
  nombre: string;
  precio: number;
  stock: number;
}

interface RespuestaServidor {
  mensaje: string;
  exito: boolean;
}

class FormularioProducto {
    private formulario: HTMLFormElement;
    private productoInput: HTMLInputElement;
    private precioInput: HTMLInputElement;
    private stockInput: HTMLInputElement;
  
    constructor() {
      this.formulario = document.getElementById('formulario') as HTMLFormElement;
      this.productoInput = document.getElementById('producto') as HTMLInputElement;
      this.precioInput = document.getElementById('precio') as HTMLInputElement;
      this.stockInput = document.getElementById('stock') as HTMLInputElement;
      
      this.formulario.addEventListener('submit', this.procesarFormulario.bind(this));
    }
  
    private procesarFormulario(event: Event) {
      event.preventDefault();
  
      const nuevoProducto: Producto = {
        nombre: this.productoInput.value,
        precio: parseFloat(this.precioInput.value),
        stock: parseInt(this.stockInput.value)
      };
  
      this.enviarProducto(nuevoProducto);
    }
  
    private async enviarProducto(producto: Producto) {
      try {
        const respuesta = await axios.post<RespuestaServidor>('/api/productos', producto);
        console.log(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  const formularioProducto = new FormularioProducto();