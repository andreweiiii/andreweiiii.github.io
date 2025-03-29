document.addEventListener('DOMContentLoaded', function () {
    function updateMenu() {
      const mainMenuList = document.querySelector('#mainMenuModal .list-group');
      const newItem = document.createElement('li');
      newItem.classList.add('list-group-item');
      newItem.textContent = 'New Dish - A special creation for today.';
      mainMenuList.appendChild(newItem);
    }
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update Menu';
    updateButton.addEventListener('click', updateMenu);
    document.body.appendChild(updateButton);
  });
      