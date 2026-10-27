document.addEventListener('DOMContentLoaded', () => {
  const changeBtn = document.getElementById('changeBtn');
  const dashboard = document.getElementById('mainDashboard');
  const mainTitle = document.getElementById('mainTitle');

  let isChanged = false;

  changeBtn.addEventListener('click', () => {
    isChanged = !isChanged;

    if (isChanged) {
      dashboard.classList.add('state-changed');
      mainTitle.textContent = "5 herramientas de desarrollo web";
    } else {
      dashboard.classList.remove('state-changed');
      mainTitle.textContent = "sitios web";
    }
  });
});