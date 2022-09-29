import Card from './Card.svelte'
import { render, screen } from '@testing-library/svelte'
import '@testing-library/jest-dom'

test('should render', () => {
  render(Card)
  expect(screen.getByTestId('card-testid')).toBeVisible()
})
