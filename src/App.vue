<template>
  <v-app>
    <v-main>
      <GitHubTopic />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import GitHubTopic from '@/containers/GitHubTopic.vue';

export default Vue.extend({
  name: 'App',
  components: {
    GitHubTopic,
  },
  data: () => ({}),
});
</script>
