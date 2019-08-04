var localStorage = require('localStorage')


export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch {
    // ignore write errors
  }
}

export const clearState = () => {
  localStorage.removeItem('state')
}

// It’s important that this piece of code is wrapped in a try/catch block because calls to localStorage.getItem can fail if the user privacy mode does not allow the use of localStorage.
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}