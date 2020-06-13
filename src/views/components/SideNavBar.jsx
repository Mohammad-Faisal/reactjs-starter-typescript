import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import styled from 'styled-components';

export default class SideNavBar extends Component {
    state = { activeItem: 'gamepad' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu fluid vertical compact color="teal" >

                <Menu.Item
                    name='corona'
                    active={activeItem === 'corona'}
                    onClick={this.handleItemClick}
                >
                    <MenuContainer>
                        <Icon name='stethoscope' />
                        <MenuItemText>Corona Products</MenuItemText>
                    </MenuContainer>
                </Menu.Item>

                <Menu.Item
                    name='grocery'
                    active={activeItem === 'grocery'}
                    onClick={this.handleItemClick}
                >
                    <MenuContainer>
                        <Icon name='cart arrow down' />
                        <MenuItemText>Grocery </MenuItemText>
                    </MenuContainer>
                </Menu.Item>

                <Menu.Item
                    name='meat'
                    active={activeItem === 'meat'}
                    onClick={this.handleItemClick}
                >
                    <MenuContainer>
                        <Icon name='food' />
                        <MenuItemText>Meat and Fish</MenuItemText>
                    </MenuContainer>

                </Menu.Item>

                <Menu.Item
                    name='mom'
                    active={activeItem === 'mom'}
                    onClick={this.handleItemClick}
                >
                    <MenuContainer>
                        <Icon name='birthday cake' />
                        <MenuItemText>Mom and Kids</MenuItemText>
                    </MenuContainer>

                </Menu.Item>

                <Menu.Item
                    name='fruit'
                    active={activeItem === 'fruit'}
                    onClick={this.handleItemClick}
                >
                    <MenuContainer>
                        <Icon name='new pied piper' />
                        <MenuItemText>Fruits and Dates</MenuItemText>
                    </MenuContainer>
                </Menu.Item>

            </Menu>
        )
    }
}

const MenuContainer = styled.div`
display: grid;
grid-template-columns: auto 1fr;
  align-items:center;
  padding: 10px 10px;
  grid-column-gap:20px;
  text-align:center;
`;

const MenuItemText = styled.div`
    font-size:16px;
    font-weight:bold;
`;