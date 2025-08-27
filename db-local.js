
// db-local.js
// Capa mínima de persistencia usando localStorage
const DB = {
  get(key, fallback = []) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  clear(key) {
    localStorage.removeItem(key);
  }
};

// Ejemplo de uso:
// const unidades = DB.get('sr_ltr_unidades', []);
// DB.set('sr_ltr_unidades', [...unidades, { id: 1, placa: 'ABC123' }]);
