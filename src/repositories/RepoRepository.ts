// Environment Variables
const baseURL = process.env.VUE_APP_API_URL ?? '';
const token = process.env.VUE_APP_TOKEN ?? '';

// Method fot the call
export const getAllRepositories = async (query: string) => {
  // using fetch
  const res = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `BEARER ${token}`,
    },
    body: JSON.stringify({
      query,
    }),
  });

  return res.json();
};
