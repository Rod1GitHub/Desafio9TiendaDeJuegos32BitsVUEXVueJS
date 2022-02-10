<template>
  <div>
    <h1>Busqueda de Juegos</h1>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formFiltroArial">Filtro</span>
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese filtro"
          v-model="filtro"
          aria-describedby="formFiltroArial"
        />
      </div>
    </section>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formCantJuegosRegis">
          Cantidad de Juegos Registrados
        </span>
        <input
          type="text"
          class="form-control"
          v-model="getJuegosRegistrados"
          aria-describedby="formCantJuegosRegis"
          disabled
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formStockTotal"
          >Stock total de Juegos</span
        >
        <input
          type="text"
          class="form-control"
          v-model="getStockTotal"
          aria-describedby="formStockTotal"
          disabled
        />
      </div>
    </section>
    <section>
      <ListGames :juegos="getJuegosByFilter" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ListGames from "@/components/ListGames";
export default {
  name: "Busquedas",
  components: { ListGames },
  computed: {
    ...mapState(["filtro"]),
    ...mapGetters([
      "getJuegosRegistrados",
      "getStockTotal",
      "getJuegosByFilter",
    ]),
    /**
     * @description Two-way Computed Property
     * @link https://vuex.vuejs.org/guide/forms.html#two-way-computed-property
     */
    filtro: {
      get() {
        return this.$store.state.filtro;
      },
      set(value) {
        this.$store.commit("SET_FILTRO", value);
      },
    },
  },
};
</script>

<style></style>
