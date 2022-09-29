import Button from './Button.svelte'
import { render, screen } from '@testing-library/svelte'
import '@testing-library/jest-dom'

test('should show button text', () => {
  render(Button, { props: { disabled: true } })
  expect(screen.getByRole('button')).toBeDisabled()
})

test('should have style primary', () => {
  render(Button, { props: { disabled: false, style: 'primary' } })
  expect(screen.getByRole('button')).toHaveClass('primary')
})

test('should have style secondary', () => {
  render(Button, { props: { disabled: false, style: 'secondary' } })
  expect(screen.getByRole('button')).toHaveClass('secondary')
})
