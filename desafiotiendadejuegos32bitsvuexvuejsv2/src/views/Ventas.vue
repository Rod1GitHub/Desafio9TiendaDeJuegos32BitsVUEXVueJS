<template>
  <div>
    <h1>Ventas de Juego</h1>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formCountProductsWithStock">
          Cantidad de productos con stock
        </span>
        <input
          type="text"
          class="form-control"
          v-model="getCountJuegosWithStock"
          aria-describedby="formCountProductsWithStock"
          disabled
        />
      </div>
    </section>
    <section>
      <ListGames :juegos="getListJuegosWithStock" cantSell />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListGames from "@/components/ListGames";
export default {
  name: "Ventas",
  components: { ListGames },
  computed: {
    ...mapGetters(["getCountJuegosWithStock", "getListJuegosWithStock"]),
  },
};
</script>

<style></style>
