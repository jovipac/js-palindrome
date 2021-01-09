import * as React from 'react';
class AppNavbar extends React.Component {
  render() {
    return (
			<header>
				<nav className="navbar navbar-expand-md navbar-dark bg-danger" id="navbarApp">
					<a className="navbar-brand" href="javascript;"></a>
					<div className="flex-grow-1 p-2 bd-highlight" id="navbarCollapse">
						<form className="form-inline d-flex justify-content-center mt-6 mt-md-0">
							<input className="form-control w-50 mr-sm-2" type="text" placeholder="Insert Text" aria-label="Search"/>
							<button className="btn btn-primary my-2 my-sm-0" type="submit">Send</button>
						</form>
					</div>
				</nav>
			</header>
    );
  }
}

export default AppNavbar;
