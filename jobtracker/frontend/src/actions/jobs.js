import axios from "axios";

import { GET_JOBS, DELETE_JOB, ADD_JOB } from "./types";

// GET JOBS
export const getJobs = () => dispatch => {
  axios
    .get("/api/jobs/")
    .then(res => {
      dispatch({
        type: GET_JOBS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteJob = id => dispatch => {
  axios
    .delete(`/api/jobs/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_JOB,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD JOB
export const addJob = job => dispatch => {
  axios
    .post("/api/jobs/", job)
    .then(res => {
      dispatch({
        type: ADD_JOB,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
