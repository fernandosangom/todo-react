const compareText = (a, b) => {
  if (a.text < b.text) {
    return -1;
  }
  if (a.text > b.text) {
    return 1;
  }
  return 0;
}

const showItems = (action, checked, unchecked) => {
  let shown = [];
  switch (action) {
    case 'All': shown = [...unchecked, ...checked]; break;
    case 'Checked': shown = checked; break;
    case 'Unchecked': shown = unchecked; break;
    default: shown = []; break;
  }
  shown.sort(compareText);
  return shown;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const stateText = state.text.value;
      const stateDate = state.date.value;

      if (stateText === '' || stateDate === '') {
        return {
          ...state,
          text: {
            ...state.text,
            error: stateText === ''
          },
          date: {
            ...state.date,
            error: stateDate === ''
          }
        }
      }
      else{
        const unchecked = [...state.unchecked, { text: stateText, date: stateDate, checked: false }];
        unchecked.sort(compareText);
        return {
          ...state,
          unchecked,
          shown: showItems(state.action, state.checked, unchecked),
          text: { value: '', error: false },
          date: { value: '', error: false },
        }
      }
    }
    case 'CHECK_ITEM': {
      action.payload.checked = true;
      const checked = [...state.checked, action.payload];
      const unchecked = state.unchecked.filter(t => t.text !== action.payload.text);
      checked.sort(compareText);
      unchecked.sort(compareText);
      return {
        ...state,
        checked,
        unchecked,
        shown: showItems(state.action, checked, unchecked)
      }
    }
    case 'UNCHECK_ITEM': {
      action.payload.checked = false;
      const unchecked = [...state.unchecked, action.payload];
      const checked = state.checked.filter(t => t.text !== action.payload.text);
      checked.sort(compareText);
      unchecked.sort(compareText);
      return {
        ...state,
        checked,
        unchecked,
        shown: showItems(state.action, checked, unchecked)
      }
    }
    case 'FILTER_ITEMS': {
      return {
        ...state,
        shown: showItems(action.payload, state.checked, state.unchecked),
        action: action.payload
      }
    }
    case 'SET_TEXT': {
      return {
        ...state,
        text: action.payload
      }
    }
    case 'SET_DATE': {
      return {
        ...state,
        date: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer;