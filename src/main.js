import TripPresenter from './presenter/presenter.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter();

tripPresenter.init(filtersContainer, tripContainer);