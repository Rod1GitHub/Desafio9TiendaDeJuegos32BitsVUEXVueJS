<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Fecha Venta</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(venta, index) in ventas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ venta.codigo }}</td>
          <td>{{ venta.nombre }}</td>
          <td>{{ venta.hora_venta }}</td>
          <td>{{ venta.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListSales",
  props: {
    ventas: {
      type: [],
      default() {
        return [];
      },
    },
  },
};
</script>
