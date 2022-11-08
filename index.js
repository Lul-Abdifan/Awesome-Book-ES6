// to import UI class
import Page from './modules/UIclass.js';

import { DateTime } from './modules/luxon.js';

// to import storebook class
import { Store, Collection, books } from './modules/book.js';

// to import navigartion class
import Navigation from './modules/navigation.js';

// script for date
setInterval(() => {
  const time = DateTime.now().toFormat("LLLL dd'th' tt");
  const date = document.querySelector('.date');
  date.innerHTML = time;
}, 1000);
