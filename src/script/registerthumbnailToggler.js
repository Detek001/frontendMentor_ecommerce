import { getItems } from "./helper/getItems.js"
export const registerThumbnailToggler = () => {

  const parseData = (data) => {
    return data.split("-")[0]
  }

  const removeActiveClass = (data, element, attr) => {
    element.forEach(item => {
      const attributData = item.dataset[attr]
      if(attributData.includes(parseData(data))) {
        item.classList.remove("active")
      } else {
        return
      }
    }) 
  }

  const addActiveToItem = (data) => {
    if (data.includes("product")) {
      const desktopImage = getItems("[data-desktop-image]")
      const url = parseData(desktopImage.getAttribute("src")) + "-" + data + ".jpg"
      desktopImage.setAttribute("src", url)
    } else {
      const selector = "[data-carousel-item='" + data + "']"
      const el = getItems(selector)
      el.classList.add("active")
    }
  }

  const eventListener = () => {
    const thumbnailImages = getItems(".thumbnail-wrapper")
    const carouselItems = getItems("[data-carousel-item]")
    thumbnailImages.forEach(image => {
      image.addEventListener("click", (e) => {
        const data = e.target.dataset.thumbnailItem
        removeActiveClass(data, thumbnailImages, "thumbnailItem")
        removeActiveClass(data, carouselItems, "carouselItem")
        addActiveToItem(data)
        image.classList.add("active")
      })
    })
  }
  eventListener()
/* 
  ######  actually don't needed ######

  const carouselListener = () => {
    const carousel = getItems("[data-modal-carousel")
    carousel.addEventListener("slide.bs.carousel", (e) => {
      const data = e.relatedTarget.dataset.carouselItem
      removeActiveClass(data, thumbnailImages, "thumbnailItem")
    })
  } 

  ######  actually don't needed ######
*/
}