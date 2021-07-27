import React, { PureComponent } from 'react'
import logo from '../../assets/omega.png'

export default class Navbar extends PureComponent {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="navbar-nav me-auto mb-2 mb-lg-0">
                        </div>
                        <form class="d-flex">
                            <ul class="navbar-nav">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Demos
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item text-dark" href="#">example</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" aria-current="page" href="#">Pages</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#">Support</a>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-danger" style={{ backgroundColor: "#f04037" }} type="submit">Get this app</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
