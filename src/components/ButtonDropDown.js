import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ButtonDropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm" style={{ display : "inline-block" , marginLeft: "15px"}}>
      <DropdownToggle caret>
        All
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>All</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Sao chép từ tác giả khác</DropdownItem>
        <DropdownItem>Tự thiết kế</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ButtonDropDown;    