import React, { useEffect } from "react";
import { useState } from "react";
import FilterSort from "../filter-sort/filter-sort";
import { webpageConstants } from "../../constants/app-constants";
import { apiHandler } from "../../api-auth/api-auth";
import "./search-repo.scss";

const SearchRepo: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [responseData, setResponseData] = useState<Array<any>>([]);
  const [apiErrorResponse, setApiErrorResponse] = useState<boolean>(false);
  const [apiErrorMsg, setApiErrorMsg] = useState<string>("");

  // if no username then reset the array as empty.
  useEffect(() => {
    if (!userName) setResponseData([]);
  }, [userName]);

  // pass username and trigger API call and get response.
  const searchRepo = async () => {
    const getApirespose = await apiHandler(userName);
    if (getApirespose.length > 0) {
      setResponseData(getApirespose);
      setApiErrorResponse(false);
    } else if (getApirespose === 0) {
      setResponseData([]);
      setApiErrorMsg(`No repository found the user: ${userName}`);
      setApiErrorResponse(true);
    } else if (getApirespose === -1) {
      setResponseData([]);
      setApiErrorMsg(`invalid username`);
      setApiErrorResponse(true);
    }
  };

  // clear repository search on clear button click.
  const clearSearch = () => {
    setUserName("");
    setApiErrorResponse(false);
    setResponseData([]);
  };
  return (
    <>
      <div className="username-search__container">
        <div className="search-label">
          <label>{webpageConstants.userameSearchLabel}</label>
          <div>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
            <button className="btn-all btn-blue" onClick={searchRepo}>
              Search
            </button>
            {userName && (
              <button className="btn-all btn-clear" onClick={clearSearch}>
                Clear
              </button>
            )}
          </div>
        </div>
        {userName.length <= 0 && (
          <div className="start-page-text">
            <p>{webpageConstants.greetingText}</p>
            <p>{webpageConstants.owner}</p>
          </div>
        )}
        {apiErrorResponse && (
          <div className="start-page-text">{apiErrorMsg}</div>
        )}
      </div>
      {responseData.length > 0 && (
        <FilterSort repoResponseProp={responseData} />
      )}
    </>
  );
};

export default SearchRepo;
