import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import * as stories from './BaseTemplate.stories'

describe('components/Example', () => {
    const { Base } = composeStories(stories)

    test('Component is not null', () => {
        const { container } = render(<Base sampleText="This is a test text." />)
        expect(container).not.toBeNull()

        // Snapshot test
        expect(container).toMatchSnapshot()
    })
})
