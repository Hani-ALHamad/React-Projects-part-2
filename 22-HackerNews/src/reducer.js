import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (data, action) => {
  switch(action.type) {
    case SET_LOADING: 
      data.isLoading = action.isLoading
      return {...data}
    case SET_STORIES : 
      data.stories = action.stories
      data.pagesCount = action.pagesCount
      return {...data}

    case REMOVE_STORY:
      data.stories = data.stories.filter((item) => item.objectID !== action.id)
      return {...data}

    case HANDLE_PAGE:
      data.currentPage = action.currentPage
      return {...data}

    case HANDLE_SEARCH: 
      data.search = action.search
      return {...data}
      
    default: 
      return data
  }
}
export default reducer
