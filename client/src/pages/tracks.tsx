import React from "react";
import { Layout } from "../components";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const TRACKS = gql(`
query ExampleQuery {
  tracksForHome {
    id
    length
    modulesCount
    thumbnail
    title
    author {
      id
      name
      photo
    }
  }
}
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <Layout grid>{JSON.stringify(data)} </Layout>;
};

export default Tracks;
