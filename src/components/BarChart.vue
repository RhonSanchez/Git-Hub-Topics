<template>
  <div>
    <apexchart
      height="400"
      width="700"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: {
    names: Array,
    stars: Array,
  },
  watch: {
    // Watch for the change
    names() {
      this.updateChart();
    },
    stars() {
      this.updateChart();
    },
  },
  data: () => ({
    chartOptions: {
      chart: {
        id: 'vuechart-1',
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: 'Stars',
        data: [],
      },
    ],
  }),
  methods: {
    updateChart() {
      // update the graph
      this.chartOptions = {
        xaxis: {
          categories: this.names,
        },
      };
      this.series = [
        {
          data: this.stars,
        },
      ];
    },
  },
};
</script>
