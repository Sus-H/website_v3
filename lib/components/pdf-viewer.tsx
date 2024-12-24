import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// import samplePDF from './test.pdf';

// import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export function Pdf() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

        return (
            <div>
                <div className='bg-zinc-800 z-10 sticky top-16'>
                    <div className='grid p-4 gap-4 grid-cols-2 place-content-center'>
                        <button
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className='hover:underline border'
                        >
                        Previous
                        </button>
                        <button
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                        className='hover:underline border'
                        >
                        Next
                        </button>
                    </div>
                    <span className='flex justify-center'>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </span>
                </div>
                <Document
                    file={"/files/pdftest2.pdf"}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className={"grid justify-center"}
                >
                    <Page pageNumber={pageNumber} scale={1} className={""} renderAnnotationLayer = {false} renderTextLayer = {false}/>
                </Document>
            
            </div>
    )
}