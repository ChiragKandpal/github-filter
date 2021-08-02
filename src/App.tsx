import React, { useEffect } from "react";
import { useState } from "react";
import { webpageConstants } from "./app-constants";
import FilterSort from "./components/filter-sort";
import "./App.scss";

const App: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [responseData, setResponseData] = useState<Array<any>>([]);
  const [apiErrorResponse, setApiErrorResponse] = useState<string | null>();

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
          setResponseData(data);
        })
        .catch((error) => {
          setApiErrorResponse('User not found');
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

  const clearSearch = () => {
    setUserName("");
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
        {responseData.length <= 0 && (
          <div className="greet-text">{webpageConstants.greetingText}</div>
        )}
        {apiErrorResponse && <div className="greet-text">{apiErrorResponse}</div>}
      </div>
      {userName && responseData.length > 0 && (
        <FilterSort repoResponseProp={responseData} />
      )}
    </>
  );
};

export default App;
