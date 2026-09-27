const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor 8n8 corriendo en local 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
