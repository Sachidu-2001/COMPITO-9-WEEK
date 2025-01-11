import { Component } from "react";
import * as Icon from 'react-bootstrap-icons';

import { Dropdown } from "react-bootstrap";

class NetHeader extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between bg-black px-3 pb-3 ">
      <div className="d-flex">
        <h2 className="text-white me-4">TV Shows</h2>
        <Dropdown>
          <Dropdown.Toggle variant="transparent" className="border border-secondary text-white">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className="me-4">
            <Icon.Grid className="text-white me-4"/>
            <Icon.Grid3x3 className="text-white"/>
        </div>

      </div>
    );
  }
}

export default NetHeader;
