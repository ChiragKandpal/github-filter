import React, { useEffect } from "react";
import { useState } from "react";
import { webpageConstants } from "./app-constants";
import FilterSort from "./components/filter-sort";
import "./style/App.scss";

const App: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [responseData, setResponseData] = useState<Array<any>>([]);
  const [apiErrorResponse, setApiErrorResponse] = useState<boolean>(false);

    // API response and error handler
  const apiHandler = async (userName: string) => {
    if (userName) {
      await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("User not found");
          }
        })
        .then((data) => {
          if (data.length > 0) {
            setResponseData(data);
            setApiErrorResponse(false);
          } else {
            setApiErrorResponse(true);
            throw new Error("User not found");
          }
        })
        .catch((error) => {
          setApiErrorResponse(true);
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    if (!userName) setResponseData([]);
  }, [userName]);

  const searchRepo = async () => {
    await apiHandler(userName);    
  };

  // clear repository search on clear button click
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
          <div className="start-page-text"><p>{webpageConstants.greetingText}</p><p>{webpageConstants.owner}</p></div>
        )}
        {apiErrorResponse && <div className="start-page-text">{webpageConstants.errorText}</div>}
      </div>
      {userName && responseData.length > 0 && (
        <FilterSort repoResponseProp={responseData} />
      )}
    </>
  );
};

export default App;
