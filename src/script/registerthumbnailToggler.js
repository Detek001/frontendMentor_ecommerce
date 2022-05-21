export const registerthumbnailToggler = () => {
  const getItems = (attr) => {
    return document.querySelectorAll(attr)
  }

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
      let desktopImage = document.querySelector("[data-desktop-image]")
      const url = "public/images/image-" + data + ".jpg"
      desktopImage.setAttribute("src", url)
    } else {
      const selector = "[data-carousel-item='" + data + "']"
      const el = document.querySelector(selector)
      el.classList.add("active")
    }
  }

  const eventListener = () => {
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

  const carouselListener = () => {
    const carousel = document.querySelector("[data-modal-carousel")
    carousel.addEventListener("slide.bs.carousel", (e) => {
      const data = e.relatedTarget.dataset.carouselItem
      removeActiveClass(data, thumbnailImages, "thumbnailItem")
    })
  }

  const thumbnailImages = getItems(".thumbnail-wrapper")
  const carouselItems = getItems("[data-carousel-item]")
  eventListener()
  carouselListener()
}