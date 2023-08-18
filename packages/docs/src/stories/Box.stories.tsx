import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@soundwave-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>This is a Box element!</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { type: 'null' },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
