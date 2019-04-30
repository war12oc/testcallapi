import React, { Component } from 'react'

export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoadded: false,

    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {


      return (
        <div>
          <div classname="wrapper">
            <div className="content-wrapper">
              <div class="box-header with-border">
<h1>
  Call Api
</h1>

              </div>
              <div class="info-box">
              <h2>from https://jsonplaceholder.typicode.com/users</h2>
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      Name: {item.name} | Email: {item.email}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}