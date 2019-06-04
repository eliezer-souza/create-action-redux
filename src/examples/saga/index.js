import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Actions } from "./reducer";

function AppSaga(props) {
  const { loading, data, sagaFetch } = props;

  useEffect(() => {
    sagaFetch();
  }, [sagaFetch]);

  function renderRepos() {
    return data[0].map(repo => (
      <div key={repo.id}>
        <span>{`${"repository: "} ${repo.name}`}</span>
      </div>
    ));
  }

  return (
    <div>
      <h1>Test with redux saga</h1>
      <button disabled={loading} onClick={sagaFetch}>
        Refresh
      </button>
      <hr />
      {loading ? <span>loading...</span> : renderRepos()}
    </div>
  );
}

export default connect(
  state => state.saga,
  { ...Actions }
)(AppSaga);
