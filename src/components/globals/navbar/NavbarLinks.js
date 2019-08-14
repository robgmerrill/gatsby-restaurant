import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils/'



export default class NavbarLinks extends Component {
    state = {
        links: [
            {
                id: 0,
                path: '/',
                name: 'home'
            }, {
                id: 1,
                path: '/about',
                name: 'about'
            },
            {
                id: 2,
                path: '/menu',
                name: 'menu'
            },
            {
                id: 3,
                path: '/contact',
                name: 'contact'
            }
        ]
    }
    render() {
        return (
            <LinkWrapper open={this.props.isNavbarOpen}>
                {
                    this.state.links.map(item => {
                        return (
                            <li key={item.key}>
                                <Link to={item.path} className="nav-link">
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </LinkWrapper>
        )
    }
}


const LinkWrapper = styled.ul`
    li {
        list-style-type: none;

    }
    .nav-link {
        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem;
    }
`