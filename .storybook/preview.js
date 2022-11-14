import '../src/styles/globals.css'
import * as NextImage from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
