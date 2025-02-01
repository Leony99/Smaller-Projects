import { Fragment } from 'react';

import Header from "../Header.jsx";

import "../../styles/Content.css";

export default props => {
    return (
        <Fragment>
            <Header icon="home" title="Home" />
            <main className="content container-fluid">
                <div className="p-3 m-3">
                    <div className="display-4">Wellcome!</div>
                    <hr />
                    <p className="mb-0">This is a CRUD application built with React.</p>
                </div>
            </main>
        </Fragment>
    );
}