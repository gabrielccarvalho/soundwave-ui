import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$emerald500',

        '&:not(:disabled):hover': {
          background: '$emerald300',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },

      secondary: {
        color: '$emerald300',
        border: '2px solid $emerald500',

        '&:not(:disabled):hover': {
          background: '$emerald500',
          color: '$white',
        },

        '&:disabled': {
          background: '$gray200',
          borderColor: '$gray200',
        },
      },

      terciary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          background: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends React.ComponentProps<typeof Button> {
  as?: React.ElementType
}

Button.displayName = 'Button'
