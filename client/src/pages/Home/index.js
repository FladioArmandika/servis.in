import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export const Home = () => {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
              <div class="container">
                <a class="navbar-brand" href="#">servis.in</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Jasa</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Tentang</a>
                    </li>
                    <li class="nav-item">
                      <Link to='/login' className="nav-link">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            

            <section class="section-1">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <h2>lorem ipsum</h2>
                      </div>
                      <div className="col-md-6">
                          
                      </div>
                  </div>
              </div>
            </section>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                      <h2>lorem ipsum</h2>
                  </div>
                  <div className="col-md-6">
                      
                  </div>
                </div>
              </div>
            <section>
              
            </section>
            
        </div>
    )
}
