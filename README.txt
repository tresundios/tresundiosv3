TRESUNDIOS WEBSITE — upload guide
=================================
Upload the whole folder contents to your web root (public_html / htdocs / www):

  index.html
  assets/css/style.css                 site styles (glassmorphism, brand palette)
  assets/js/main.js                    case studies, filters, modal, form
  assets/img/                          logo-light.png, logo-dark.png, icon.png, favicon.png
  assets/vendor/bootstrap/             Bootstrap 5.3.3 (CSS + JS bundle), served locally

No build step and no server code is needed. Fonts load from Google Fonts.

Editing
- Case studies: edit the CASES list at the top of assets/js/main.js.
- Colours: the brand tokens are at the top of assets/css/style.css (--tr-red, --tr-charcoal...).
- Contact form: static hosting cannot send email, so the form prepares the enquiry text
  for the visitor to copy. To receive enquiries directly, set the form's action to a form
  service (Formspree, Web3Forms) or a PHP mail script, and remove e.preventDefault() in
  the "Enquiry form" block of main.js.
