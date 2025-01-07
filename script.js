document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Switch Theme';
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.fontSize = '16px';
    toggleButton.style.backgroundColor = '#fff';
    toggleButton.style.color = '#333';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.borderRadius = '5px';
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener('click', function() {
      const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
      if (currentTheme.trim() === '#2d3845') {
        document.documentElement.style.setProperty('--primary-color', '#1e1e1e');
        document.documentElement.style.setProperty('--secondary-color', '#ff6f61');
        document.documentElement.style.setProperty('--accent-color', '#ff6f61');
        document.documentElement.style.setProperty('--light-color', '#f0f0f0');
      } else {
        document.documentElement.style.setProperty('--primary-color', '#2d3845');
        document.documentElement.style.setProperty('--secondary-color', '#a6a278');
        document.documentElement.style.setProperty('--accent-color', '#8c6436');
        document.documentElement.style.setProperty('--light-color', '#f2e6ac');
      }
    });
  });
  