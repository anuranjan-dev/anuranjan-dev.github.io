import { ReplitConnectors } from "@replit/connectors-sdk";
import { Router, type IRouter } from "express";

const router: IRouter = Router();

const discordUserId = "1411793737453015231";

type DiscordUser = {
  id: string;
  username: string;
  global_name?: string | null;
  avatar?: string | null;
};

function isDiscordUser(value: unknown): value is DiscordUser {
  if (typeof value !== "object" || value === null) return false;

  const user = value as Record<string, unknown>;
  return (
    user.id === discordUserId &&
    typeof user.username === "string" &&
    (typeof user.global_name === "string" || user.global_name === null || user.global_name === undefined) &&
    (typeof user.avatar === "string" || user.avatar === null || user.avatar === undefined)
  );
}

function getDiscordAvatarUrl(user: DiscordUser): string | null {
  if (!user.avatar) return null;

  const extension = user.avatar.startsWith("a_") ? "gif" : "png";
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=256`;
}

router.get("/discord/profile", async (req, res): Promise<void> => {
  try {
    const connectors = new ReplitConnectors();
    const discordResponse = await connectors.proxy(
      "discord",
      "/api/v10/users/@me",
      { method: "GET" },
    );

    if (!discordResponse.ok) {
      req.log.warn(
        { discordStatus: discordResponse.status },
        "Discord profile request failed",
      );
      res.status(502).json({ error: "Discord profile is temporarily unavailable" });
      return;
    }

    const discordUser: unknown = await discordResponse.json();
    if (!isDiscordUser(discordUser)) {
      req.log.error("Discord returned an unexpected profile response");
      res.status(502).json({ error: "Discord profile response was invalid" });
      return;
    }

    res.setHeader("Cache-Control", "no-store");
    res.json({
      id: discordUser.id,
      username: discordUser.username,
      displayName: discordUser.global_name ?? discordUser.username,
      avatarUrl: getDiscordAvatarUrl(discordUser),
    });
  } catch (error) {
    req.log.error({ err: error }, "Unable to fetch Discord profile");
    res.status(502).json({ error: "Discord profile is temporarily unavailable" });
  }
});

export default router;