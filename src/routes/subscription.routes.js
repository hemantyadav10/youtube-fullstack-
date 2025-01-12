import { Router } from 'express';
import {
  getSubscribedChannels,
  fetchSubscribedChannelVideos,
  toggleSubscription,
} from "../controllers/subscription.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT);

router
  .route("/c/:channelId")
  .post(toggleSubscription);

router.route("/u/:subscriberId").get(getSubscribedChannels);

router.route("/videos").get(fetchSubscribedChannelVideos)


export default router