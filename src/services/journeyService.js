const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getComingJourney = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/journey/getComingJourney`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (json.err) {
      throw new Error(json.err);
    }
    return json;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getComingJourney };