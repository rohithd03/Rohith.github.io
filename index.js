

function Observe(template) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const display = entry.target.querySelector('.' + template);

      if (entry.isIntersecting) {
        display.classList.add(template + '-transition');
        return;
      }

      // display.classList.remove(template + '-transition');
    });

  });

  observer.observe(document.querySelector('.' + template + '-wrapper'));
}


Observe("display");
Observe("text");
Observe("column1");
Observe("column2");
Observe("skills-heading");
