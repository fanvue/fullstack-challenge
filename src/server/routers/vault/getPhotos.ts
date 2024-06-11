import axios from "axios";

import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const getPhotos = publicProcedure
  // @TODO can use zod for payload parsing eg:
  //   .input(z.object({ skip: z.number(), take: z.number() }))
  // Can use context for neat access to session, roles or ORM
  .query(async (/* { ctx: { prisma }, input: { prompt } } */) => {
    const { data } = await axios.get<Photo[]>(
      "https://jsonplaceholder.typicode.com/photos"
    );

    return data;
  });
