import { Fragment, Component } from 'react';

import Header from "../Header.jsx";

import "../../styles/Content.css";

export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Header icon="contact" title="Contact" />
                <main className="content container-fluid">
                    <div className="p-3 m-3">
                        <span>
                            Checkout my github: <a href="https://github.com/Leony99" target="_blank">
                            Leony Costa</a>
                        </span>
                    </div>
                </main>
            </Fragment>
        )
    }
}