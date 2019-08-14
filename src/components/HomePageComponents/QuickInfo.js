import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'

export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                SOme content
                <Title title="Let us tell you" message="our mission" />
                <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
            </Section>
        )
    }
}
