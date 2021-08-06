import {webpageConstants} from '../../constants/app-constants';
import "./repo-table.scss";

interface Props {
  tableArrayProps: Array<any>;
}
const RepoTable: React.FC<Props> = ({ tableArrayProps }: Props) => {
  return (
    <div className="repo-table__container">
      {tableArrayProps.map(({ id, ...data }) => (
        <div className="repo-card" key={id}>
          <img
            className="avatar-img"
            src={data.owner.avatar_url}
            width="50"
            height="50"
            alt="owner-img"
          />
          <div className="text-data-wrapper">
            <h4>{data.name}</h4>
            <p><span>{webpageConstants.tableIssueTitle}</span> {data.owner.login ? data.owner.login : 'none'}</p>
            <p>
              <span>{webpageConstants.tableOpenTitle}</span> {data.open_issues_count ? data.open_issues_count : 'none'}
            </p>
            <p>
              <span>{webpageConstants.tableWatcherTitle}</span> {data.watchers_count ? data.watchers_count : 'none'}
            </p>
            <p>
              <span>{webpageConstants.tableStargazerTitle}</span> {data.stargazers_count ? data.stargazers_count : 'none'}
            </p>
            <p>
              <span>{webpageConstants.tableDescTitle}</span> {data.description ? `${data.description.slice(0, 100)}${data.description.length >= 100 && `...`}` : 'none'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoTable;
