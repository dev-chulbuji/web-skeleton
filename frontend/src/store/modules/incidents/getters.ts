export default {
  isLoading: (state: any) => state.loading,
  getItems: (state: any) => state.items,
  getAddOnItems: (state: any) => state.addOnItems,
  getSelectedItems: (state: any) => state.selectedItems,
  getPagination: (state: any) => state.pagination,
  getTotal: (state: any) => state.total,
  getHeaders: (state: any) => state.headers,
  getSearchTitle: (state: any) => state.searchTitle,
}