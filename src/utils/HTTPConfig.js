const HTTPConfig = (query) => {
  query = query ? `/confirm${query}` : "";
  return {
    URL: `http://localhost:3005/authentication/meli${query}`,
    body: {
      credentials: "include",
    },
  };
};

export default HTTPConfig;
