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
};
