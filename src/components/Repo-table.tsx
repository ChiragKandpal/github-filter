import "../style/repo-table.scss";

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
            <p><span>owner:</span> {data.owner.login}</p>
            <p>
              <span>description:</span> {data.description ? `${data.description.slice(0, 100)}}...` : 'none'}
            </p>
            <p>
              <span>Openissues:</span> {data.open_issues_count}
            </p>
            <p>
              <span>watcher:</span> {data.watchers_count}
            </p>
            <p>
              <span>Stargazers:</span> {data.stargazers_count}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoTable;
