import axios from 'axios';

  
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
