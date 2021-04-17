import axios from 'axios';
import {API_BASE} from '../utils/variables';
import authHeader from './authToken';

const savePerson = async (
  name,
  showerNumberWeek,
  bathNumberWeek,
  showerLengthMinutes,
  waterRunningBrushingTeeth,
) => {
  return axios
    .post(
      API_BASE + '/person',
      {
        name,
        showerNumberWeek,
        bathNumberWeek,
        showerLengthMinutes,
        waterRunningBrushingTeeth,
      },
      {
        headers: await authHeader(),
      },
    )
    .then(
      async (response) => {
        return response.data.person;
      },
      (error) => {
        throw error.response.data.error;
      },
    );
};

const addNewPerson = async (
  name,
  showerNumberWeek,
  bathNumberWeek,
  showerLengthMinutes,
  waterRunningBrushingTeeth,
) => {
  return axios
    .post(
      API_BASE + '/person/new',
      {
        name,
        showerNumberWeek,
        bathNumberWeek,
        showerLengthMinutes,
        waterRunningBrushingTeeth,
      },
      {
        headers: await authHeader(),
      },
    )
    .then(
      async (response) => {
        return response.data.person;
      },
      (error) => {
        throw error.response.data.error;
      },
    );
};
const updatePerson = async (
  person_id,
  name,
  showerNumberWeek,
  bathNumberWeek,
  showerLengthMinutes,
  waterRunningBrushingTeeth,
) => {
  return axios
    .put(
      API_BASE + '/person/' + person_id,
      {
        name,
        showerNumberWeek,
        bathNumberWeek,
        showerLengthMinutes,
        waterRunningBrushingTeeth,
      },
      {
        headers: await authHeader(),
      },
    )
    .then(
      async (response) => {
        return response;
      },
      (error) => {
        throw error.response.data.error;
      },
    );
};

const deletePerson = async (person_id) => {
  return await axios
    .delete(API_BASE + '/person/' + person_id, {
      headers: await authHeader(),
    })
    .then(
      async (response) => {
        return response;
      },
      async (error) => {
        throw error.response.data.error;
      },
    );
};

const getPeople = async () => {
  return await axios
    .get(API_BASE + '/person', {
      headers: await authHeader(),
    })
    .then(
      async (response) => {
        return response.data.people;
      },
      (error) => {
        throw error.response.data.error;
      },
    );
};

export default {
  savePerson,
  getPeople,
  addNewPerson,
  deletePerson,
  updatePerson,
};
