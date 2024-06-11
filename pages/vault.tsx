import Head from "next/head";
import trpcSS from "../src/utils/trpcSS";
import { InferGetServerSidePropsType } from "next";
import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import Post from "../src/components/organisms/Post.organism";
import { useState } from "react";
import Image from "next/image";

const VaultPage = ({
  initialPhotos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof initialPhotos)[number] | null
  >(null);

  const handleOpen = (photo: NonNullable<typeof selectedPhoto>) =>
    setSelectedPhoto(photo);

  const handleClose = () => setSelectedPhoto(null);

  return (
    <>
      <Head>
        <title>Vault Page</title>
        <meta name="description" content="Some page desc" />
        {/* more tags */}
      </Head>
      <Container>
        <Typography variant="h1" gutterBottom>
          Vault
        </Typography>
        {/* @TODO move to own organism for handling img gallery */}
        <Grid container spacing={2}>
          {/* @TODO veritaulize list to improve performance */}
          {initialPhotos.length ? (
            initialPhotos.slice(0, 20).map((photo) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                key={photo.id}
                onClick={() => handleOpen(photo)}
              >
                {/* add add loading animation via img background */}
                <Image
                  width={300}
                  height={300}
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ mt: 2 }}>
              No photos
            </Typography>
          )}
        </Grid>
        {/* @TODO move to own organism & move top level for handling common modals */}
        <Modal open={Boolean(selectedPhoto)} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              maxWidth: "90%",
              maxHeight: "90%",
              overflow: "auto",
            }}
          >
            {selectedPhoto && (
              <>
                <Image
                  width={300}
                  height={300}
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {selectedPhoto.title}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export const getServerSideProps = async () => {
  // @TODO use ctx req session to get user id from cookie or wherever and filter posts based on that, if present - otherwise show generic
  // @TODO limit to x initial photos to avoid excess data transfers
  try {
    const initialPhotos = await trpcSS.vaultRouter.getPhotos.fetch();

    return {
      props: {
        initialPhotos,
      },
    };
  } catch (err) {
    // @TODO DataDog logger/Sentry or whatever
    // @TODo move top level to all trpc procedure error scenarios
    console.warn(err);
    return {
      props: {
        initialPhotos: [],
      },
    };
  }
};

export default VaultPage;
