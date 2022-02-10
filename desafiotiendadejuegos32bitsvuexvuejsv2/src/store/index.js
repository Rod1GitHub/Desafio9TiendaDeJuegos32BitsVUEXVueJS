import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ventas: [],
    filtro: "",
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: "100",
        precio: "30000",
        color: "red",
        destacado: "true",
      },
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: "100",
        precio: "30000",
        color: "red",
        destacado: "true",
      },
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: "100",
        precio: "30000",
        color: "red",
        destacado: "true",
      },
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: "100",
        precio: "30000",
        color: "red",
        destacado: "true",
      },
    ],
  },
  mutations: {
    SET_FILTRO(state, payload) {
      state.filtro = payload;
    },
    SET_JUEGOS(state, payload) {
      state.juegos = payload;
    },
    ADD_VENTA(state, payload) {
      state.ventas = payload;
    },
  },
  actions: {
    sellOneItemProduct({ commit, state }, indexProduct) {
      setTimeout(() => {
        const juego = {
          ...state.juegos[indexProduct],
          stock: state.juegos[indexProduct].stock - 1,
        };

        const newJuegos = [
          ...state.juegos.slice(0, indexProduct),
          juego,
          ...state.juegos.slice(indexProduct + 1),
        ];
        commit("SET_JUEGOS", newJuegos);

        setTimeout(() => {
          const venta = {
            codigo: juego.codigo,
            nombre: juego.nombre,
            precio: juego.precio,
            hora_venta: new Date().toLocaleString(),
          };
          const ventas = [...state.ventas];
          ventas.push(venta);
          commit("ADD_VENTA", ventas);
          alert("Venta Procesada");
        }, 1000);
      }, 2000);
    },
  },
  getters: {
    getJuegosRegistrados: ({ juegos }) => {
      return juegos.length;
    },
    getStockTotal: ({ juegos }) => {
      return juegos.reduce(
        (previusValue, currentValue) => previusValue + currentValue.stock,
        0
      );
    },
    getJuegosByFilter: ({ juegos, filtro }) => {
      return juegos.filter((juego) => {
        for (const word of filtro) {
          if (juego.codigo.indexOf(word) === -1) {
            return false;
          }
        }
        return true;
      });
    },
    getCountJuegosWithStock: ({ juegos }) => {
      return juegos.filter((juego) => juego.stock > 0).length;
    },
    getListJuegosWithStock: ({ juegos }) => {
      return juegos.filter((juego) => juego.stock > 0);
    },
    getTotalAmount: ({ ventas }) => {
      return ventas.reduce(
        (previusValue, currentValue) => previusValue + currentValue.precio,
        0
      );
    },
  },
});
