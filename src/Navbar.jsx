import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
        <Menu.Item header>DEV@Deakin</Menu.Item>
        <Menu.Item>
            <Button primary>Home</Button>
        </Menu.Item>
        <Menu.Item>
            <Button primary>Articles</Button>
        </Menu.Item>
        <Menu.Item>
            <Button primary>Tutorials</Button>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
                <Button primary>Login</Button>
            </Menu.Item>
        </Menu.Menu>
  </Menu>
);

export default Navbar;

