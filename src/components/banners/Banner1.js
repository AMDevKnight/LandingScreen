import React, { PureComponent } from 'react';

export default class Banner1 extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          {this.props.leftImage && <div class="col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ marginTop: "60px" }} src={this.props.leftImage} class="iPhone-Body" alt="iPhone-Body" />
          </div>}
          <div class="col-md-6 col-sm-12 mt-4">
            <h1 class="col-md-10" style={{ fontWeight: "bolder", fontSize: "50px", marginTop: !this.props.list && "170px" }}>{this.props?.heading}</h1>
            <p class="col-md-10" style={{ fontWeight: "normal", padding: "30px 0px 30px 0px" }}>{this.props?.text}</p>
            {this.props.Button && <button class="btn btn-danger" style={{ backgroundColor: "#f04037" }} type="submit">{this.props.Button}
            </button>}
            {this.props.list &&
              <ol class="number-circle-list number-circle-list--tertiary-color">{this.props.list.map((i) => {
                return (
                  <li class="number-circle-list--list-item">
                    <div class="col-md-6 col-sm-12 mt-4 d-inline">
                      <h5 class="col-md-10 d-inline bold">{i[0]}</h5>
                      <p class="col-md-10" style={{ padding: "10px 0px 0px 50px" }}>{i[1]}</p></div></li>)
              })}</ol>}
            {this.props.formButton && <form className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <input class="form-control" type="email" style={{ border: "none" }} placeholder="Email address" />
                </div>
                <div className="col-md-7">
                  <button class="btn btn-danger" style={{ backgroundColor: "#f04037" }} type="submit">{this.props.formButton}
                  </button>
                </div>
              </div>
            </form>}
          </div>
          {this.props.rightImage && <div class="col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center" }}>
            <img src={this.props.rightImage} height="606px"class="iPhone-Body" alt="iPhone-Body" />
          </div>}
        </div>

      </div>
    )
  }
}
