import { jest } from '@jest/globals'
import hello from './hello'

jest.mock('./greet', () => {
	const greet = jest.requireActual('./greet')

	return {
		...greet,
		__esModule: true,
		default: (name) => `Hola ${name}`,
	}
})

it('applies a mock', () => {
	expect(hello('Jane')).toBe('Hola Jane')
})
