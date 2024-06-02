

export function goTo(link: string) {
  window.open(link, '_blank');
}

export function sendMail(destiny:string) {
  window.location.assign(`mailto:${destiny}`);
  
}

export function downloadCv() {
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1BFp_uu6syDqRIVqnPJRVQzfvKPAvilce';

  const a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'CV_DiegoRamos.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

