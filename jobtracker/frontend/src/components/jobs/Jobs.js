import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJobs, deleteJob } from "../../actions/jobs";

export class Jobs extends Component {
  static propTypes = {
    jobs: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    return (
      <Fragment>
        <h2>Job App List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.jobs.map(job => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.name}</td>
                <td>{job.email}</td>
                <td>{job.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteJob.bind(this, job.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(
  mapStateToProps,
  { getJobs, deleteJob }
)(Jobs);
