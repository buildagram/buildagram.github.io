/* Features to add:
 * Titles, captions, onDelete,
 */


/* A DOM component that displays an image in the gallery. */
export default class Image {

  static getImages(images) {
    let imageArray = images.map(elem => new Image({"file": elem}));
    return imageArray;
  }

  constructor(data) {
    this.file = data.file;

  }

  addToDOM(parent) {
    let image = document.createElement("img");
    image.src = this.file;
    parent.appendChild(image);
  }

  async load() {
    let [status, data] = await apiRequest("GET", "/");
    console.log(data)
    return data;
  }


}
