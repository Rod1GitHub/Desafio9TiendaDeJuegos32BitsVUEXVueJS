<template>
  <div>
    <h1>Total</h1>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formMontoTotalVentas"
          >Monto Total Ventas</span
        >
        <input
          type="text"
          class="form-control"
          v-model="getTotalAmount"
          aria-describedby="formMontoTotalVentas"
          disabled
        />
      </div>
    </section>
    <section>
      <ListSales :ventas="ventas" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ListSales from "@/components/ListSales";
export default {
  name: "Total",
  components: {
    ListSales,
  },
  computed: {
    ...mapState(["ventas"]),
    ...mapGetters(["getTotalAmount"]),
  },
};
</script>

<style></style>
