'use strict'

const toast = (container, title) => {
  container.success('', title, {
    closeButton: true,
    timeOut: 2000,
    tapToDismiss: true
  })
}

export default toast
