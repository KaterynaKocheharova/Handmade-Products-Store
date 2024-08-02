export const addFavClass = (favProductsIds, id) => {
    if (favProductsIds.includes(id)) {
      return "favorite";
    }
  };