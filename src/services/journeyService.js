const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getComingJourney = async (userID) => {
  try {
    const res = await fetch(`${BACKEND_URL}/journey/getComingJourney/${userID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
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

const getAllJourneys = async (userID) => {
  try {
    const res = await fetch(`${BACKEND_URL}/journey/getAllJourneys/${userID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
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


const getJourney =async (journeyId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/journey/getJourney/${journeyId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
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
const createJourney = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/journey/createJourney`, {
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
const editJourney = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/journey/editJourney`, {
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

const deleteJourney = async (journeyId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/journey/deleteJourney/${journeyId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
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
export { getComingJourney,getAllJourneys,getJourney,createJourney,editJourney,deleteJourney };