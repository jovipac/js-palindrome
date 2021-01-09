import * as React from "react";

class Home extends React.Component {
  render() {
    return (
      <main role="main" className="container mt-5">
        <div className="my-3 p-3 bg-white rounded box-shadow">
          <h1 className="mt-5">Results:</h1>
          <p className="lead">-</p>
        </div>
      </main>
    );
  }
}

export default Home;
