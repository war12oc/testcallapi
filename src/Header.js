import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
<div>
  <header className="main-header">
    {/* Logo */}
    <a href="index2.html" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini"><b>W</b>AP</span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg"><b>Web</b>APP</span>
    </a>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top">
      {/* Sidebar toggle button*/}
      <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      {/* Navbar Right Menu */}
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {/* Messages: style can be found in dropdown.less*/}
          <li className="dropdown messages-menu">
            <ul className="dropdown-menu">
            
              <li>
                {/* inner menu: contains the actual data */}
                <ul className="menu">
                  <li>{/* start message */}
                    <a href="fake_url">
                      <div className="pull-left">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o" /> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  {/* end message */}
                  <li>
                    <a href="fake_url">
                      <div className="pull-left">
                        <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><i className="fa fa-clock-o" /> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="fake_url">
                      <div className="pull-left">
                        <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Developers
                        <small><i className="fa fa-clock-o" /> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="fake_url">
                      <div className="pull-left">
                        <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Sales Department
                        <small><i className="fa fa-clock-o" /> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="fake_url">
                      <div className="pull-left">
                        <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Reviewers
                        <small><i className="fa fa-clock-o" /> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="fake_url">See All Messages</a></li>
            </ul>
          </li>
         
          
          {/* User Account: style can be found in dropdown.less */}
          <li className="dropdown user user-menu">
            <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/avatar04.png" className="user-image" alt="User" />
              <span className="hidden-xs">Bhremsak Tapewongsa</span>
            </a>
            <ul className="dropdown-menu">
              {/* User image */}
              <li className="user-header">
                <img src="dist/img/avatar04.png" className="img-circle" alt="User" />
                <p>
                Bhremsak Tapewongsa - Web Developer
                  <small>test01</small>
                </p>
              </li>
              {/* Menu Body */}
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="fake_url">Followers</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="fake_url">Sales</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="fake_url">Friends</a>
                  </div>
                </div>
                {/* /.row */}
              </li>
              {/* Menu Footer*/}
              <li className="user-footer">
                <div className="pull-left">
                  <a href="fake_url" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="fake_url" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          {/* Control Sidebar Toggle Button */}
          <li>
            <a href="fake_url" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</div>


    )
  }
}

