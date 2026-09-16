import { expect, test, vi } from 'vitest'
import { fromBase, own } from '../src/star.ts'

vi.mock(import('../src/star.ts'), () => ({
  own: () => 'mocked-own',
  fromBase: () => 'mocked-base',
}))

test('manual mock keeps exports re-exported with export *', () => {
  expect(own()).toBe('mocked-own')
  expect(fromBase()).toBe('mocked-base')
})
