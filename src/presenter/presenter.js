import NewCreateFormView from '../view/create-form.js';
import NewEditFormView from '../view/edit-form.js';
import NewFilterView from '../view/filters.js';
import NewSortView from '../view/sort.js';
import NewPointTripView from '../view/point-trip.js';
import { render, RenderPosition } from '../render.js';

export default class TripPresenter {
    filtersView = new NewFilterView();
    sortView = new NewSortView();
  
    init(filtersContainer, tripContainer) {
      this.filtersContainer = filtersContainer;
      this.tripContainer = tripContainer;
  
      render(this.filtersView, this.filtersContainer);
      render(this.sortView, this.tripContainer, RenderPosition.AFTERBEGIN);
  
      render(new NewCreateFormView(), this.tripContainer);
      render(new NewEditFormView(), this.tripContainer);
  
      for (let i = 0; i < 3; i++) {
        render(new NewPointTripView(), this.tripContainer);
      }
    }
  }