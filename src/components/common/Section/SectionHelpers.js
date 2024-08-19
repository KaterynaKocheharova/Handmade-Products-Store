export const buildSectionClass = (type = "") => {
  switch (type) {
    case "hero":
      return "hero-section";
    case "cart":
      return "cart-section";
    default:
      return "";
  }
};
