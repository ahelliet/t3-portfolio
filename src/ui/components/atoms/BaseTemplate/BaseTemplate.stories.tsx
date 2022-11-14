import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import BaseTemplate from './BaseTemplate'
import { mockBaseTemplateProps } from './BaseTemplate.mocks'

export default {
    title: 'Template/BaseTemplate',
    component: BaseTemplate,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof BaseTemplate>

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
    <BaseTemplate {...args} />
)

export const Base = Template.bind({})

Base.args = { ...mockBaseTemplateProps.base }
Base.storyName = 'BaseTemplate'
