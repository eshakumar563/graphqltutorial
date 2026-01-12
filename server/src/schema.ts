import gql from 'graphql-tag';

export const typeDefs = gql`
"A track is a group of Modules that teaches about a specific topic"
    type Track {
        "Unique identifier for the track"
        id : ID!
        "The title of the track"
        title : String!
        "The author of the track"
        author : Author!
        thumbnail : String
        "The length of the track in seconds"
        length : Int
        "The number of modules in the track"
        modulesCount : Int
    }
    "Author of a complete Track or a Module"
    type Author {
        "Unique identifier for the author"
        id : ID!
        "The name of the author"
        name : String!
        "The photo of the author"
        photo : String
    }
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome : [Track!]!
    }
    `;
