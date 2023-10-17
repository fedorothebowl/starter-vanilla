import './resources/scss/main.scss';
import Alpine from 'alpinejs';

import calendar from './resources/js/calendar';

Alpine.data('calendar', calendar);
Alpine.start();