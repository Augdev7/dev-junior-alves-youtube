/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */

const initIsotope = () => {
  var grid = document.querySelectorAll('.gallery');

  var iso;

  if (grid.length >= 1) {
    grid.forEach((item) => {
      // eslint-disable-next-line no-undef

      iso = new Isotope(item, {
        itemSelector: '.items'
      });
    });
  }

  var filtersElem = document.querySelector('.filtering');

  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      // eslint-disable-next-line no-undef

      if (!matchesSelector(event.target, 'span')) {
        return;
      }

      var filterValue = event.target.getAttribute('data-filter');

      // eslint-disable-next-line no-self-assign

      filterValue = filterValue;

      iso.arrange({ filter: filterValue });
    });

    var buttonGroups = document.querySelectorAll('.filtering');

    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];

      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener('click', function (event) {
        // eslint-disable-next-line no-undef

        if (!matchesSelector(event.target, 'span')) {
          return;
        }

        buttonGroup.querySelector('.active').classList.remove('active');

        event.target.classList.add('active');
      });
    }
  }
};

export default initIsotope;
