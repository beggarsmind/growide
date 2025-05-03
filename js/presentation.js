function toggleMenu() {
  document.getElementById('nav-list').classList.toggle('show');
}

const url = 'presentation_pdf/GROWIDE GREEN POWER ADVISORS - presentation.pdf';
let pdfDoc = null,
  pageNum = 1,
  pageRendering = false,
  pageNumPending = null,
  scale = 1.2,
  canvas = document.getElementById('pdf-canvas'),
  ctx = canvas.getContext('2d');

pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
  pdfDoc = pdfDoc_;
  document.getElementById('page-count').textContent = pdfDoc.numPages;
  renderPage(pageNum);
});

function renderPage(num) {
  pageRendering = true;
  pdfDoc.getPage(num).then(function (page) {
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    const renderTask = page.render(renderContext);

    renderTask.promise.then(function () {
      pageRendering = false;
      document.getElementById('page-num').textContent = num;

      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });
}

function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

function prevPage() {
  if (pageNum <= 1) return;
  pageNum--;
  queueRenderPage(pageNum);
}

function nextPage() {
  if (pageNum >= pdfDoc.numPages) return;
  pageNum++;
  queueRenderPage(pageNum);
}

window.prevPage = prevPage;
window.nextPage = nextPage;
