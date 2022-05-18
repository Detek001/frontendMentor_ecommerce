import { init } from "./src/script/init.js"

const onload = (callback) => {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', e => {
      console.log('DOM fully loaded and parsed')
      callback()
    })
  } else {
    callback()
  }
}

onload(init)