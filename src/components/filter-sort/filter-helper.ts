export const filterDropdownHandle = (currTarget: any) => {
  const filterListContainerAll = document.querySelectorAll(
    `[data-filter-list="filter-list"]`
  );
  const filterWrapper = currTarget.closest(
    `[data-filter-wrapper="filter-wrapper"]`
  );
  const filterListContainer = filterWrapper.querySelector(
    `[data-filter-list="filter-list"]`
  );
  filterListContainerAll.forEach((element) => {
    if (element !== filterListContainer) element.classList.add("hide");
    if (element === filterListContainer) element.classList.toggle("hide");
  });
};
