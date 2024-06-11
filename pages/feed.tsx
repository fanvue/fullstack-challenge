import Head from "next/head";
import { trpc } from "../src/utils/trpcNext";
import trpcSS from "../src/utils/trpcSS";
import { InferGetServerSidePropsType } from "next";

const Feed = ({
  initialPosts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // @TODO after loading initial posts - add pagination & load more as user infinitely scrolls
  //   const hello = trpc.feedRouter.getAllPosts.useQuery(undefined, {
  //   initialData: initialPosts,
  // });

  return (
    <>
      <Head>
        <title>Feed Page</title>
      </Head>
      {/* @TODO add a layout/template component that will strucutre the page */}
      <main>
        <h1>Feed page</h1>
        <section>
          {/* @TODO Move to own components (I like the ATOMIC design patterns, so this would be an organism composed of molecules which themselves would be made of atoms) */}
          <div>
            {initialPosts.length
              ? initialPosts.map((p) => (
                  <div key={p.id}>
                    <h1>{p.title}</h1>
                    <p>{p.body}</p>
                    <button onClick={() => console.log(p.id)}>
                      Show comments
                    </button>
                  </div>
                ))
              : "No posts"}
          </div>
        </section>
      </main>
    </>
  );
};

// handle SEO with SSR preloading html to crawl/index on
export const getServerSideProps = async () => {
  // @TODO use ctx req session to get user id from cookie or wherever and filter posts based on that, if present - otherwise show generic
  // @TODO limit to x initial posts to avoid excess data transfers
  const initialPosts = await trpcSS.feedRouter.getAllPosts.fetch();

  return {
    props: {
      initialPosts,
    },
  };
};

export default Feed;
