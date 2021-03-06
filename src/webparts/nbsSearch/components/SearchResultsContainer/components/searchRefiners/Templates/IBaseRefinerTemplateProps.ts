import { IRefinementResult, IRefinementFilter, IRefinementValue } from "../../../../../../../models/ISearchResult";
import RefinementFilterOperationCallback from "../../../../../../../models/RefinementValueOperationCallback";
import IUserService from '../../../../../../../services/UserService/IUserService';

interface IBaseRefinerTemplateProps {

  /**
   * The refiner values to render
   */
  refinementResult: IRefinementResult;

  /**
   * The current selected values for this refinement result
   * Used to build local state for sub components
   */
  selectedValues: IRefinementValue[];

  /**
   * Callback method to update selected filters
   */
  onFilterValuesUpdated: RefinementFilterOperationCallback;

  /**
   * Indicates if the template allows multi values selection
   */
  isMultiValue?: boolean;

  /**
   * Indicates if the current filters should be reset
   */
  shouldResetFilters: boolean;

  /**
   * A single filter value to reset
   */
  removeFilterValue?: IRefinementValue;

  /**
   * UserService
   */
  userService?: IUserService;

  /**
   * Indicates if the value filter should be visible
   */
  showValueFilter: boolean;
}

export default IBaseRefinerTemplateProps;
