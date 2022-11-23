// Interfaces for the graph ql response
export interface Name {
  __typename: string;
  name: string;
}

export interface Topic {
  __typename: string;
  name: string;
}

export interface Nodes<T> {
  __typename: string;
  node: Array<T>;
}

export interface Node {
  __typename: string;
  node: Repository;
}

export interface Repository {
  id: string;
  stargazerCount: number;
  createdAt: Date;
  descriptionHTML: string;
  languages: Nodes<Name>;
  name: string;
  openGraphImageUrl: string;
  primaryLanguage: Name;
  pushedAt: Date;
  repositoryTopics: Nodes<Topic>;
  updatedAt: Date;
  url: string;
  __typename: string;
}
