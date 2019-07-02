import axios from "axios";

import { GET_JOBS } from "./types";

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
