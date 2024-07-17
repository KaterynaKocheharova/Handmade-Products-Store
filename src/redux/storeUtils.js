export const handleError = (state, action) => {
    state.loading = null;
    state.error = action.payload;
  };
  