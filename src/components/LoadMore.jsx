export default function LoadMore() {
  return (
    <div>
      <table className="table">
        <tr>
          <td>img</td>
          <td>Name</td>
          <td>Price</td>
          <td>Brand</td>
          <td>Category</td>
          <td>Sale</td>
          <td>Options</td>
        </tr>

        <tbody>
          {data &&
            data.map((pro) => {
              <tr className=" table tableNames">
                <td>
                  <img src={pro.image} alt="" className="proImage" />
                </td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.Brand}</td>
                <td>{pro.Category}</td>
                <td>{pro.Sale}</td>
                <td>
                  <button className="Edit">Edit</button>/
                  <button className="delete">delete</button>
                </td>
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
}
