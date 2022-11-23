<template>
  <NavBar>
    <template v-slot:default>
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" class="text-center">
            <h1 class="text-h4 font-weight-bold">Git Hub topic's</h1>
            <span class="text-h6">
              Search the current trending repositories on github
            </span>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="5" sm="4">
            <v-text-field
              class="mx-3"
              v-model="topic"
              label="Topic"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="5" sm="4">
            <v-text-field
              class="mx-3"
              v-model.number="stars"
              type="number"
              label="Stars"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="2" sm="2" class="d-flex justify-center">
            <v-btn
              class="mx-2"
              fab
              dark
              color="deep-purple"
              @click="searchRepository"
            >
              <v-icon dark> mdi-magnify </v-icon>
            </v-btn>
          </v-col>
          <div class="d-flex justify-center">
            <ColumnChart :names="names" :stars="starsArray" />
          </div>
          <v-container>
            <v-row>
              <v-col
                v-for="repo in data[0]"
                :key="repo.node.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <RepositoryCard :repository="repo.node" />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </template>
  </NavBar>
</template>

<script lang="ts">
import Vue from 'vue';
import RepositoryCard from '@/components/RepositoryCard.vue';
import ColumnChart from '@/components/BarChart.vue';
import NavBar from '@/components/NavBar.vue';
import SearchRepository from '@/graphql/SearchRepository';
import { Node } from '@/types';
import { getAllRepositories } from '@/repositories/RepoRepository';
export default Vue.extend({
  name: 'GitHubTopic',
  data: () => ({
    topic: 'vue',
    stars: 0,
    data: [] as Array<Array<Node>>,
  }),
  components: {
    RepositoryCard,
    ColumnChart,
    NavBar,
  },
  computed: {
    names() {
      if (this.data?.length > 0) {
        return this.data[0].map((repo: Node) => repo.node.name);
      }
      return [];
    },
    starsArray() {
      if (this.data?.length > 0) {
        return this.data[0].map((repo: Node) => repo.node.stargazerCount);
      }
      return [];
    },
  },
  methods: {
    async searchRepository(): Promise<void> {
      // filter for the query
      const queryString = `topic:${this.topic} stars:>${this.stars}`;
      // replace values
      const query = SearchRepository.replace('$queryString', queryString);
      // clean array
      this.data.splice(0);
      // method for the call
      const res = await getAllRepositories(query);
      if (res?.data?.search?.edges) {
        this.data.push(res.data.search.edges);
      }
    },
  },
  mounted(): void {
    // Call when mounted the application
    this.searchRepository();
  },
});
</script>
