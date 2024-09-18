export const buildSectionClass = (type = "") => {
  switch (type) {
    case "hero":
      return "hero-section";
    case "cart":
      return "cart-section";
    case "products":
      return "products-section";
    default:
      return "";
  }
};
