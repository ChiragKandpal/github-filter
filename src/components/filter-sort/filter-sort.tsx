import { useEffect, useRef, useState } from "react";
import RepoTable from "../repo-table/Repo-table";
import { webpageConstants } from "../../constants/app-constants";
import "./filter-sort.scss";

interface sortProps {
  repoResponseProp: Array<any>;
}

const FilterSort: React.FC<sortProps> = ({ repoResponseProp }: sortProps) => {
  const [arrNew, setArrNew] = useState<Array<any>>([]);
  const [repoList, setRepoList] = useState<Array<string>>([]);
  const [stargazerCountList, setStargazerCountList] = useState<Array<number>>([]);
  const [openIssueCountList, setOpenIssueCountList] = useState<Array<number>>([]);
  const [watcherCountList, setWatcherCountList] = useState<Array<number>>([]);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [activeRepo, setActiveRepo] = useState<string | null>(null);
  const [activeStargazerCount, setActiveStargazerCount] = useState<string | null>(null);
  const [activeOpenIssueCount, setActiveOpenIssueCount] = useState<string | null>(null);
  const [activeWatcherCount, setActiveWatcherCount] = useState<string | null>(null);
  const [filterParam, setFilterParam] = useState<{
    repoName: null | string;
    starCount: null | number;
    openCount: null | number;
    watcher: null | number;
  }>({
    repoName: null,
    starCount: null,
    openCount: null,
    watcher: null,
  });
  const ref = useRef<HTMLDivElement>(null);
  const sortOptionRef = useRef<HTMLDivElement>(null);
  let repoResponseCurrent = repoResponseProp;

  // set filter object to null on username search.
  useEffect(() => {
    setActiveRepo(null);
    setSelectedValue(null);
    setActiveStargazerCount(null);
    setActiveOpenIssueCount(null);
    setActiveWatcherCount(null);
  }, [repoResponseProp]);

  useEffect(() => {
    setArrNew([...repoResponseCurrent]);
  }, [repoResponseProp, repoResponseCurrent]);

  // push sorted and non repeatitive values i.e reponame and counts in respective arrays. 
  useEffect(() => {
    const filterRepoNameArray = (repoName: string) => {
      let result = repoResponseProp.map((a) => a[repoName]);
      return result;
    };

    const filterArray = (filterPropertyName: string) => {
      let result = repoResponseProp.map((a) => a[filterPropertyName]);
      let sortResult = [...Array.from(new Set(result))];
      sortResult.sort(function (a, b) {
        return a - b;
      });
      return sortResult;
    };

    setRepoList(filterRepoNameArray("name"));
    setStargazerCountList(filterArray("stargazers_count"));
    setOpenIssueCountList(filterArray("open_issues_count"));
    setWatcherCountList(filterArray("watchers_count"));
  }, [repoResponseProp]);

  // handle sort dropdow when clicked outside sort element.
  useEffect(() => {
    const handleSortDropdown = (e: any) => {
      if (toggleDropdown && ref.current && !ref.current.contains(e.target)) {
        setToggleDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleSortDropdown);
    return () => {
      document.removeEventListener("mousedown", handleSortDropdown);
    };
  }, [toggleDropdown]);

  // get filtered array i.e repoResponseCurrent based on option selections.
  const repoFilterHandler = (applyFilter: boolean) => {
    if (applyFilter) {
      Object.entries(filterParam).forEach(([key, value]) => {
        if (value !== null) {
          // eslint-disable-next-line
          repoResponseCurrent = repoResponseCurrent.filter((word) => {
            if (key === "repoName") {
              return value === word.name;
            }
            if (key === "starCount") {
              return value === word.stargazers_count;
            }
            if (key === "openCount") {
              return value === word.open_issues_count;
            }
            if (key === "watcher") {
              return value === word.watchers_count;
            }
          });
        }
      });
      setArrNew([...repoResponseCurrent]);
    } else {
      setFilterParam({
        repoName: null,
        starCount: null,
        openCount: null,
        watcher: null,
      });
      setSelectedValue(null);
      setActiveRepo(null);
      setActiveStargazerCount(null);
      setActiveOpenIssueCount(null);
      setActiveWatcherCount(null);
      setArrNew([...repoResponseProp]);
    }
  };

  // generic filter dropdown handler on filter click.
  const filterDropdownHandle = (currTarget: any) => {
    const filterWrapper = currTarget.closest(
      `[data-filter-wrapper="filter-wrapper"]`
    );
    const filterListContainer = filterWrapper.querySelector(
      `[data-filter-list="filter-list"]`
    );
    filterListContainer.classList.toggle("hide");
  };

  // on filter option select add selecteed option to filterParam object.
  const filterSelectHandler = (event: any) => {
    const filterType = event.dataset.filterType;
    if (filterType === "repo-name") {      
      setFilterParam({ ...filterParam, repoName: event.dataset.filterName ? event.dataset.filterName : null });
      setActiveRepo(event.dataset.filterName ? event.dataset.filterName : null);
    }
    if (filterType === "stargaze") {
      setFilterParam({
        ...filterParam,
        starCount: event.dataset.filterName ? Number(event.dataset.filterName) : null,
      });
      setActiveStargazerCount(event.dataset.filterName ? event.dataset.filterName : null);
    }
    if (filterType === "open-issue") {
      setFilterParam({
        ...filterParam,
        openCount: event.dataset.filterName ? Number(event.dataset.filterName) : null,
      });
      setActiveOpenIssueCount(event.dataset.filterName ? event.dataset.filterName : null);
    }
    if (filterType === "watcher") {
      setFilterParam({
        ...filterParam,
        watcher: event.dataset.filterName ? Number(event.dataset.filterName) : null,
      });
      setActiveWatcherCount(event.dataset.filterName ? event.dataset.filterName : null);
    }

    filterDropdownHandle(event);
  };

  // sort ascending and descending count logic.
  const sortResultHandler = (e: any) => {
    repoResponseCurrent = arrNew;
    const element = e.target;
    const sortDirection =
      element.dataset.sortDirection === "asc" ? true : false;
    const listProperty =
      element.dataset.sortName === "star"
        ? "stargazers_count"
        : element.dataset.sortName === "open"
        ? "open_issues_count"
        : element.dataset.sortName === "watcher"
        ? "watchers_count"
        : "";
    repoResponseCurrent = repoResponseCurrent.sort((a, b) => {
      if (sortDirection) {
        return a[listProperty] - b[listProperty];
      } else {
        return b[listProperty] - a[listProperty];
      }
    });

    setArrNew([...repoResponseCurrent]);
    setSelectedValue(element.textContent);
    setToggleDropdown(false);
  };

  // handle sort list dropdown on sort button click.
  const sortdropDownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <>
      <div className="filter-sort__container">
        <div className="filter-sort__filter-wrapper">
          repository:{" "}
          <div
            data-filter-wrapper="filter-wrapper"
            className="filter-each-wrapper"
          >
            <div
              className="active-filter"
              onClick={(e) => filterDropdownHandle(e.currentTarget)}
            >
              {activeRepo ? activeRepo : `All`}
            </div>
            <div
              data-filter-list="filter-list"
              className="filter-list-container overlap-clear hide"
            >
              <div
                className="filter-option"
                data-filter-name={null}
                data-filter-type="repo-name"
                onClick={(e) => filterSelectHandler(e.target)}
              >All</div>
              {repoList &&
                repoList.map((value) => (
                  <div key={value}>
                    <div
                      className="filter-option"
                      data-filter-name={value}
                      data-filter-type="repo-name"
                      onClick={(e) => filterSelectHandler(e.target)}
                    >
                      {value}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="count-filter">
            <div
              data-filter-wrapper="filter-wrapper"
              className="filter-each-wrapper"
            >
              Starsgazers:
              <div
                className="active-filter"
                onClick={(e) => filterDropdownHandle(e.currentTarget)}
              >
                {activeStargazerCount ? activeStargazerCount : `All`}
              </div>
              <div
                data-filter-list="filter-list"
                className="filter-list-container hide"
              >
                <div
                  className="filter-option"
                  data-filter-name={null}
                  data-filter-type="stargaze"
                  onClick={(e) => filterSelectHandler(e.target)}
                >All</div>
                {stargazerCountList &&
                  stargazerCountList.map((value) => (
                    <div key={value}>
                      <div
                        className="filter-option"
                        data-filter-name={value}
                        data-filter-type="stargaze"
                        onClick={(e) => filterSelectHandler(e.target)}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              data-filter-wrapper="filter-wrapper"
              className="filter-each-wrapper"
            >
              Open issues:
              <div
                className="active-filter"
                onClick={(e) => filterDropdownHandle(e.currentTarget)}
              >
                {activeOpenIssueCount ? activeOpenIssueCount : `All`}
              </div>
              <div
                data-filter-list="filter-list"
                className="filter-list-container hide"
              >
                <div
                  className="filter-option"
                  data-filter-name={null}
                  data-filter-type="open-issue"
                  onClick={(e) => filterSelectHandler(e.target)}
                >All</div>
                {openIssueCountList &&
                  openIssueCountList.map((value) => (
                    <div key={value}>
                      <div
                        className="filter-option"
                        data-filter-name={value}
                        data-filter-type="open-issue"
                        onClick={(e) => filterSelectHandler(e.target)}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              data-filter-wrapper="filter-wrapper"
              className="filter-each-wrapper"
            >
              Watchers:
              <div
                className="active-filter"
                onClick={(e) => filterDropdownHandle(e.currentTarget)}
              >
                {activeWatcherCount ? activeWatcherCount : `All`}
              </div>
              <div
                data-filter-list="filter-list"
                className="filter-list-container hide"
              >
                <div
                  className="filter-option"
                  data-filter-name={null}
                  data-filter-type="watcher"
                  onClick={(e) => filterSelectHandler(e.target)}
                >All</div>
                {watcherCountList &&
                  watcherCountList.map((value) => (
                    <div key={value}>
                      <div
                        className="filter-option"
                        data-filter-name={value}
                        data-filter-type="watcher"
                        onClick={(e) => filterSelectHandler(e.target)}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <button className="btn-blue btn-all" onClick={() => repoFilterHandler(true)}>
          apply filters
        </button>
        <button className="btn-clear btn-all" onClick={() => repoFilterHandler(false)}>
          clear filters & sort
        </button>

        {arrNew.length > 0 && (
          <div className="filter-sort__sort-wrapper">
            Sort By
            <div className="sort-body" ref={ref}
            onClick={sortdropDownHandler}>
              <div className="current-sort js-selected-sort">
                {selectedValue ? selectedValue : `None`}
              </div>
              {toggleDropdown && (
                <ul className="sort-list">
                  <li>
                    <div
                      ref={sortOptionRef}
                      data-sort-direction="asc"
                      data-sort-name="star"
                      onClick={(e) => sortResultHandler(e)}
                    >
                      star count (asc)
                    </div>
                  </li>
                  <li>
                    <div
                      data-sort-direction="desc"
                      data-sort-name="star"
                      onClick={(e) => sortResultHandler(e)}
                    >
                      star count (dec)
                    </div>
                  </li>
                  <li>
                    <div
                      data-sort-direction="asc"
                      data-sort-name="open"
                      onClick={(e) => sortResultHandler(e)}
                    >
                      open issue count (asc)
                    </div>
                  </li>
                  <li>
                    <div
                      data-sort-direction="desc"
                      data-sort-name="open"
                      onClick={(e) => sortResultHandler(e)}
                    >
                      open issue count (dec)
                    </div>
                  </li>
                  <li>
                    <div
                      data-sort-direction="asc"
                      data-sort-name="watcher"
                      onClick={(e) => sortResultHandler(e)}
                    >
                      watcher count (asc)
                    </div>
                  </li>
                  <li>
                    <div
                      data-sort-direction="desc"
                      data-sort-name="watcher"
                      onClick={(e) => sortResultHandler(e)}
                    >
                      watcher count (dec)
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      {arrNew.length > 0 ? (
        <RepoTable tableArrayProps={arrNew} />
      ) : (
        <div className="filter-error-msg">{webpageConstants.repoNotPresent}</div>
      )}
    </>
  );
};

export default FilterSort;
