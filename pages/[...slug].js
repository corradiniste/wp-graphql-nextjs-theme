import client from "client";
import { gql } from "@apollo/client";
import { data } from "autoprefixer";

export default function Page(props) {
  console.log("PAGE PROPS: ", props);
  return <div>page</div>;
}

export const getStaticPaths = async () => {
  const {data} = await client.query
    query: gql` 
    query AllPagesQuery {
      pages {
        nodes {
          uri
        }
      }
    }
    `,
  });

  return {
    paths: data.pages.nodes.map(page => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split("/"),
      },
    })), 
    fallback: false,
  };
};