// Gets the type of demonlist

export function getRange(type) {
  switch (type) {
    case "main":
      return [1, 75];
    case "extended":
      return [76, 150];
    case "legacy":
      return [151, 100000];
  }
}

const list_type = [
  {
    name: "Main",
    min: 1,
    max: 75,
    decription:
      "These are the hardest of the hard levels in the entire demonlist! Rewards the most points! Only for the worthy...",
  },
  {
    name: "Extended",
    min: 76,
    max: 150,
    decription:
      "Levels that are kind of hard, but not too hard... Feeling lucky? Give one a spin!",
  },
];

export function getYouTubeThumbnail(url) {
  if (url.includes("twitch")) {
    // You can either return a placeholder/fallback image URL or null
    return "/no-thumbnail-image.webp"; // assuming it's in public/
  }

  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/,
  );

  if (!match) return null;

  const videoId = match[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export { list_type };
