import { Meta, StoryObj } from '@storybook/react'
import { EnvelopeSimple } from 'phosphor-react';
import { TextInput , TaskInputRootProps} from "./TextInput";


export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      [
        <TextInput.Icon>
          <EnvelopeSimple />
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your email adress' />
      ]
    ),
  },
  argTypes: {
    children: {
      table: {  
        disable: true,
      }
    },
  }
} as Meta<TaskInputRootProps>

export const Default: StoryObj<TaskInputRootProps> = {}

export const WithoutIcon: StoryObj<TaskInputRootProps> = {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder='Type your email adress' />
  },
  argTypes: {
    children: {
      table: {  
        disable: true,
      }
    },
  }
} as Meta<TaskInputRootProps>
