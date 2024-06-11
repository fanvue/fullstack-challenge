import Head from "next/head";
import trpcSS from "../src/utils/trpcSS";
import { InferGetServerSidePropsType } from "next";
import { Box, Container, Typography } from "@mui/material";
import Post from "../src/components/organisms/Post.organism";

const FeedPage = ({
  initialPosts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // @TODO after loading initial posts - add pagination & load more as user infinitely scrolls
  //   const hello = trpc.feedRouter.getAllPosts.useQuery(undefined, {
  //   initialData: initialPosts,
  // });

  // -> If we dont care about SEO indexing feed page, can load data on client after showing skeleto loader

  return (
    <>
      <Head>
        <title>Feed Page</title>
        <meta name="description" content="Some page desc" />
        {/* more tags */}
      </Head>
      {/* @TODO add a layout/template component that will strucutre the page */}
      {/* @TODO Move to own components (I like the react ATOMIC design pattern. Based on its principles this would be an organism composed of molecules which themselves would be made of atoms) */}
      <Container component="main" maxWidth="md">
        <Typography variant="h1" component="h1" gutterBottom>
          Feed Page
        </Typography>
        <Box component="section">
          {initialPosts.length ? (
            initialPosts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <Typography variant="body1" component="p">
              No posts available
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

// handle SEO with SSR preloading html to crawl/index on
export const getServerSideProps = async () => {
  try {
    // @TODO use ctx req session to get user id from cookie or wherever and filter posts based on that, if present - otherwise show generic
    // @TODO limit to x initial posts to avoid excess data transfers
    const initialPosts = await trpcSS.feedRouter.getAllPosts.fetch();

    return {
      props: {
        initialPosts,
      },
    };
  } catch (err) {
    // @TODO DataDog logger/Sentry or whatever
    // @TODo move top level to all trpc procedure error scenarios
    console.warn(err);
    return {
      props: {
        initialPosts: [],
      },
    };
  }
};

export default FeedPage;
