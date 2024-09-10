import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list', {
  duration: 300,
  showMultiple: true,
  elementClass: 'faq-items',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-content',
  heightStyle: 'content',
});
