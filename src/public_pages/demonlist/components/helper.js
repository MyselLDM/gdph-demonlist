// Gets the type of demonlist

function getRange(type) {
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
  {
    name: "Legacy",
    min: 151,
    max: 280,
    decription:
      "Levels that have been fallen off the list, these levels are unmaintained and the ordering may not be accurate anymore.",
  },
];

function extractVideoId(url) {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/,
  );

  if (!match) return null;
  return match[1];
}

function getYouTubeThumbnail(url) {
  if (url.includes("twitch")) {
    return "/no-thumbnail-image.webp";
  }

  const videoId = extractVideoId(url);
  if (!videoId) return null;

  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getThemeColor(type) {
  switch (type) {
    case "Main":
      return "yellow";
    case "Extended":
      return "pink";
    case "Legacy":
      return "blue";
  }
}

function getTextColor(type) {
  switch (type) {
    case "Main":
      return "shiny-main-list-text";
    case "Extended":
      return "shiny-extended-list-text";
    case "Legacy":
      return "shiny-legacy-list-text";
  }
}

export {
  list_type,
  extractVideoId,
  getYouTubeThumbnail,
  getRange,
  getThemeColor,
  getTextColor,
};
