import React, { PureComponent } from 'react';

export default class Banner3 extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          {this.props.gridImage && 
          <div class="col-md-7 col-sm-12 gridRow" style={{ display: "flex", justifyContent:"center", padding: "100px 0px 100px 0px" }}>
                        <div class="column">
                            {this.props.gridImage[0].map((image) => {
                                return (
                                    <img src={image} />)
                            })}
                        </div>
                        <div class="column">
                            {this.props.gridImage[1].map((image) => {
                                return (
                                    <img src={image} />)
                            })}
                    </div>
          </div>}
          <div class="col-md-5 col-sm-12 mt-4">
            <h1 class="col-md-10" style={{ fontWeight: "bolder", fontSize: "50px", marginTop:"210px" }}>{this.props?.heading}</h1>
            <p class="col-md-10" style={{ fontWeight: "normal", padding: "30px 0px 30px 0px" }}>{this.props?.text}</p>
          </div>
        </div>
      </div>
    )
  }
}
