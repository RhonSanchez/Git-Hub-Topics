<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="repository.openGraphImageUrl" contain></v-img>

    <v-card-title>{{ repository.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{ repository.stargazerCount }}</div>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <div>
        <span v-html="repository.descriptionHTML"></span>
      </div>
    </v-card-text>

    <v-card-title>Topics</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip
          v-for="topic in repository.repositoryTopics.nodes"
          :key="topic.name"
          >{{ topic.topic.name }}</v-chip
        >
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        :href="repository.url"
        target="_blanck"
      >
        View more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Repository } from '@/types';
export default {
  data: () => ({
    selection: 0,
  }),
  props: {
    repository: {
      type: Object,
      default: {} as Repository,
    },
  },
};
</script>
