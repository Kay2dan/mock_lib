import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr className="table-primary">
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{r.first}</td>
            <td>{r.last}</td>
            <td>{r.handle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
