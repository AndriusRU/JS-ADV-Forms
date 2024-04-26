import Tooltip from './Tooltip';

const element = document.querySelector('.popover-btn');
const tooltipFactory = new Tooltip();

let tooltips = [];

const showPopover = (title, content, el) => {
  tooltips.push({
    name: el.name,
    id: tooltipFactory.showTooltip(title, content, el),
  });
};

const onClick = (event) => {
  event.preventDefault();

  if (event.target.classList.contains('popover-btn')) {
    if (tooltips.length === 0) {
      showPopover(event.target.dataset.popTitle, event.target.dataset.popText, event.target);
    } else {
      tooltips.forEach((elem) => tooltipFactory.removeTooltip(elem.id));
      tooltips = [];
    }
  }
};

element.addEventListener('click', onClick);
