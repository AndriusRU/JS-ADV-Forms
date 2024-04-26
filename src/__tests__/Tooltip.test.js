import Tooltip from '../js/Tooltip';

afterEach(() => {
  // Очищаем созданные элементы после каждого теста
  document.body.innerHTML = '';
});

test('show tooltip', () => {
  const HTML = document.createElement('div');
  HTML.classList.add('container');
  HTML.innerHTML = '<button class="popover-btn" data-toggle="popover" data-pop-title="Какое-то название" data-pop-text="Здесь написан текст, который нужен.">Click to toggle popover</button>';
  document.body.appendChild(HTML);

  const tooltip = new Tooltip();
  const button = document.querySelector('.popover-btn');
  tooltip.showTooltip(button.dataset.popTitle, button.dataset.popText, button);
  expect(tooltip.tooltips.length).toBe(1);
});

test('remove tooltip', () => {
  const HTML = document.createElement('div');
  HTML.classList.add('container');
  HTML.innerHTML = '<button class="popover-btn" data-toggle="popover" data-pop-title="Какое-то название" data-pop-text="Здесь написан текст, который нужен.">Click to toggle popover</button>';
  document.body.appendChild(HTML);

  const tooltip = new Tooltip();
  const button = document.querySelector('.popover-btn');
  const id = tooltip.showTooltip(button.dataset.popTitle, button.dataset.popText, button);
  tooltip.removeTooltip(id);
  expect(tooltip.tooltips.length).toBe(0);
});
