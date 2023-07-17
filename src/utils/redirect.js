import HTTPConfig from "./HTTPConfig";

export const redirect = async (query = "") => {
  try {
    const HTTP = HTTPConfig(query);

    const getAuthURL = await fetch(HTTP.URL, HTTP.body);
    console.log(getAuthURL)
    if(getAuthURL.status > 300) throw new Error("server error, wait")
    const  AuthURL = await getAuthURL.json();
    location.href = AuthURL.url;
  } catch (error) {
    console.error(error);
  }
};
