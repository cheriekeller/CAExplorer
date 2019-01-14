import backgroundItems from '../../../config/backgroundSidebar'

const backgroundItemList = backgroundItems.map(item => ({
  ...item,
  root: 'background',
}))

export { backgroundItemList }
