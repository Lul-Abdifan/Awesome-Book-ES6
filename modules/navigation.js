class Navigation {
    static changePage(identifier) {
      switch (identifier) {
        case 'List':
        {
          contactSpace.style.display = 'none';
          addSpace.style.display = 'none';
          storerSpace.style.display = 'block';
          break;
        }
  
        case 'Add new':
        {
          contactSpace.style.display = 'none';
          addSpace.style.display = 'block';
          storerSpace.style.display = 'none';
          break;
        }
  
        default:
        {
          contactSpace.style.display = 'block';
          addSpace.style.display = 'none';
          storerSpace.style.display = 'none';
          break;
        }
      }
    }
  }
  
  links.forEach((link) => {
    link.onclick = () => {
      Navigation.changePage(link.textContent);
    };
  });