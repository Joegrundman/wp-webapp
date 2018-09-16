import { fetchGamefile, fetchInitfile } from './gamefile'
jest.mock('./initialize.json', () => ({
  "init": "test"
}))
jest.mock('./sample.json', () => ({
  "sample": "test"
}))

describe('fetchInitFile', (): void => {
  it('should fetch the initialize file', (): void => {
    expect(fetchInitfile()).toEqual({
      "init": "test"
    })
  })
})

describe('fetchGameFile', (): void => {
  it('should fetch the sample game file', (): void => {
    expect(fetchGamefile()).toEqual({
      "sample": "test"
    })
  })
})