import React, { PureComponent } from 'react';

export default class Banner2 extends PureComponent {
  render() {
    return (
      <div className="container mw-100" style={{ background: "#5454d4" }}>
        <div className="row Rectangle">
          <div className="col-md-6 col-sm-12 text-sm text-warning mr-1">
          <i className="fa fa-star"></i>&ensp;<i className="fa fa-star"></i>&ensp;<i className="fa fa-star"></i>&ensp;<i className="fa fa-star"></i>
            <p className="comment">“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Everyone should try it!”</p>
            <p className="authName">Jonathan Taylor</p>
          </div>
          <div className="col-md-6 col-sm-12 text-sm text-warning mr-1">
          <i className="fa fa-star"></i>&ensp;<i className="fa fa-star"></i>&ensp;<i className="fa fa-star"></i>&ensp;<i className="fa fa-star"></i>
            <p className="comment">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
            <p className="authName">Lizzie Rodgers</p>
          </div>
        </div>
      </div>
    )
  }
}
