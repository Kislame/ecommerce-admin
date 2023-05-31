import { useState } from 'react';
import { Link } from 'react-router-dom';

function Productstable({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPagesize] = useState(5);
  const pageCount = Math.ceil(products.length / pageSize);

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentPageItems = products.slice(firstIndex, lastIndex);
  const pagesNumbers = [...Array(pageCount + 1).keys()].slice(1);
  function changePage(n) {
    setCurrentPage(n);
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== pageCount) {
      setCurrentPage(currentPage + 1);
    }
  }

  const columns = [
    { headerName: 'ID' },
    { headerName: 'Product' },
    { headerName: 'Stock' },
    { headerName: 'price' },
    { headerName: 'Actions' },
  ];
  function handleDelete(id) {}
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {columns.map((col) => (
              <th key={col.headerName}>{col.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageItems.map((row, index) => (
            <tr key={index} className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>{row.id}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{row.title}</div>
                  </div>
                </div>
              </td>
              <td>{row.inStock && 'true'}</td>

              <td>{`$${row.price}`}</td>
              <th>
                <div className="flex gap-4 items-center">
                  <Link to={'/dashboard/product/' + row._id}>
                    <button className="btn btn-info btn-outline btn-xs">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="btn btn-circle  btn-warning btn-sm"
                    onClick={() => handleDelete(row.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center">
        <div className="btn-group mt-8">
          <button className="btn btn-outline" onClick={prePage}>
            «
          </button>
          {pagesNumbers.map((n, i) => (
            <button
              className={`btn ${currentPage === n ? 'btn-active' : ''}`}
              onClick={() => changePage(n)}
              key={i}
            >
              {n}
            </button>
          ))}
          <button className="btn btn-outline" onClick={nextPage}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productstable;
