export default class BaseFile {

  async base64Encode(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;
  }

}
