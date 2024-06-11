import { router } from "../../trpc";
import { getPhotos } from "./getPhotos";

const vaultRouter = router({
  getPhotos,
  // @TODO keep adding procedures here
});

export default vaultRouter;
