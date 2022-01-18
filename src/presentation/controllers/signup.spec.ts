import { SignUpController } from './signup'

describe('SignUp Controller', (): any => {
  test('Should return 400 if no name is provided', () => {
    // System Under Test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
