// Edamam - Recipes API

const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASEURL_EDAMAM = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}`;
const SINGLE_URL = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&app_id=${APP_ID}&app_key=${API_KEY}`;
const URI_HEAD = "http://www.edamam.com/ontologies/edamam.owl#recipe_";

// Spoonatular - Restaurant API

const API_KEY_SPPONATULAR = "2c4f6a8fc26d473893d6a6404800ac81";

export { BASEURL_EDAMAM, SINGLE_URL, URI_HEAD };
