const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getAllEntrys = async (journeyID) => {
  try {
    const res = await fetch(`${BACKEND_URL}/entry/getAllEntrys/${journeyID}`, {
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


const getEntry =async (entryId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/entry/getEntry/${entryId}`, {
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
const createEntry = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/entry/createEntry`, {
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
const editEntry = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/entry/editEntry`, {
      method: 'PUT',
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

const deleteEntry = async (journeyId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/entry/deleteEntry/${journeyId}`, {
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
export { getAllEntrys,getEntry,createEntry,editEntry,deleteEntry };