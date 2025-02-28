import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red, esto evita el mensaje de  Error: NetworkError when attempting to fetch resource que aparece al estar editando desde windows a wsl.
  }
})
