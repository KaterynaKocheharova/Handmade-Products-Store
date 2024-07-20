export const buildSectionClass = (type = "") => {
  switch (type) {
    case "hero":
      return "hero-section";
    default:
      return "section";
  }
};
