function toggleTask(element) {
    element.classList.toggle('completed');
    
    const checkbox = element.querySelector('input[type=checkbox]');
    checkbox.checked = element.classList.contains('completed');
  }
  