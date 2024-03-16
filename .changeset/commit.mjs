// @ts-check
import commitFunctions from '@changesets/cli/commit'

export default {
  getVersionMessage: (...args) => {
    console.log('uepaa')
    return commitFunctions.getVersionMessage(...args)
  }
}
