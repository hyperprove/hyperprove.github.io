// Copy BibTeX to clipboard, with a textarea fallback for older browsers.
function copyBibTeX() {
  const bibtex = document.getElementById('bibtex-code').textContent;
  const button = document.querySelector('.copy-bibtex-btn');
  const label = button.querySelector('.copy-text');

  const done = function () {
    button.classList.add('copied');
    label.textContent = 'Copied!';
    setTimeout(function () {
      button.classList.remove('copied');
      label.textContent = 'Copy';
    }, 2000);
  };

  const fallback = function () {
    const textArea = document.createElement('textarea');
    textArea.value = bibtex;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    done();
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(bibtex).then(done).catch(fallback);
  } else {
    fallback();
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  scrollButton.classList.toggle('visible', window.pageYOffset > 300);
});

document.addEventListener('DOMContentLoaded', function () {
  // Show / hide the standard deviations in Table 1.
  const toggle = document.getElementById('std-toggle');
  const table = document.getElementById('main-results');
  if (toggle && table) {
    toggle.addEventListener('change', function () {
      table.classList.toggle('hide-std', !toggle.checked);
    });
  }

  // Render the LaTeX equations once KaTeX has loaded.
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  }
});
