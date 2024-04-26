export default class Tooltip {
  constructor() {
    this.tooltips = [];
  }

  showTooltip(titleText, contentText, element) {
    const container = document.querySelector('.container');

    const parentElement = document.createElement('div');
    parentElement.classList.add('popover', 'tooltip_container');

    const tooltipTitle = document.createElement('div');
    tooltipTitle.classList.add('tooltip_title');
    tooltipTitle.innerText = titleText;

    const arrow = document.createElement('div');
    arrow.classList.add('arrow');

    const tooltipText = document.createElement('div');
    tooltipText.classList.add('tooltip_text');
    tooltipText.innerText = contentText;
    parentElement.appendChild(arrow);
    parentElement.appendChild(tooltipTitle);
    parentElement.appendChild(tooltipText);
    container.before(parentElement);

    const id = performance.now();

    this.tooltips.push({
      id,
      element: parentElement,
    });

    const parent = element.closest('div');
    const { left, top } = parent.getBoundingClientRect();

    const leftAlign = left + parent.offsetWidth / 2 - parentElement.offsetWidth / 2;
    const topAlign = top - parentElement.offsetHeight - 10;
    parentElement.style.left = `${leftAlign}px`;
    parentElement.style.top = `${topAlign}px`;

    return id;
  }

  removeTooltip(id) {
    const tooltip = this.tooltips.find((elem) => elem.id === id);
    tooltip.element.remove();
    this.tooltips = this.tooltips.filter((elem) => elem.id !== id);
  }
}
