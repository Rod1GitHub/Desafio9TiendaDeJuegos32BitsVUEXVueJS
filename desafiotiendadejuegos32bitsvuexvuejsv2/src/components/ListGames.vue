<template>
  <div class="table-responsive">
    <table v-if="juegos.length > 0" class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock Disponible</th>
          <th scope="col">Precio</th>
          <th v-if="cantSell" scope="col">Vender</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(juego, index) in juegos"
          :key="index"
          :class="getBgColor(juego.color)"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <th v-if="cantSell" scope="col">
            <button
              id="btn-sell-product"
              class="btn btn-dark"
              @click="sellOneItemProduct(index)"
            >
              Vender
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ListGames",
  props: {
    juegos: {
      type: [],
      default() {
        return [];
      },
    },
    cantSell: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    ...mapActions(["sellOneItemProduct"]),
    getBgColor(color) {
      switch (color) {
        case "red":
          return "bg-danger";
        case "blue":
          return "bg-primary";
        case "green":
          return "bg-success";
        case "yellow":
          return "bg-warning";
        default:
          return "bg-info";
      }
    },
  },
};
</script>
