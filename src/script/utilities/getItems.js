export const getItems = (selector) => {
  const nodeList = document.querySelectorAll(selector)
  return nodeList.length > 1 ? nodeList : nodeList[0]
}