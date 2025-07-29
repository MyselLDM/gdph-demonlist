export function getThemeBgColor(type) {
  switch (type) {
    case "Main":
      return "bg-yellow-500";
    case "Extended":
      return "bg-pink-500";
    case "Legacy":
      return "bg-blue-500";
  }
}

export function getTextColor(type) {
  switch (type) {
    case "Main":
      return "shiny-main-list-text";
    case "Extended":
      return "shiny-extended-list-text";
    case "Legacy":
      return "shiny-legacy-list-text";
  }
}
