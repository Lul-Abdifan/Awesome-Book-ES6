import * as Variables from "./variables.js"
class Navigation {
  static changePage(identifier) {
    switch (identifier) {
      case 'List':
      {
     Variables.contactSpace.style.display = 'none';
     Variables.addSpace.style.display = 'none';
     Variables.storerSpace.style.display = 'block';
        break;
      }

      case 'Add new':
      {
        Variables.contactSpace.style.display = 'none';
        Variables.addSpace.style.display = 'block';
        Variables.storerSpace.style.display = 'none';
        break;
      }

      default:
      {
        Variables.contactSpace.style.display = 'block';
        Variables.addSpace.style.display = 'none';
        Variables.storerSpace.style.display = 'none';
        break;
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', Navigation.changePage('Add new'));

Variables.links.forEach((link) => {
  link.onclick = () => {
    Navigation.changePage(link.textContent);
  };
});
export default Navigation