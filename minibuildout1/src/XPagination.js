import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
// import data from './mock-data.json';
// import './styles.scss';
import axios from "axios";

let PageSize = 10;

export default function XPagination() {
  const [currentPage, setCurrentPage] = useState(1);
const [data, setData] = useState([]);
const [currentdata, setCurrentdata] = useState([]);


useEffect(() => {
    performAPICall();
},[])


const performAPICall = async () => {
    try{
    let result1 = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    setData(result1.data);
    }
    catch (e) {
            alert("failed to fetch data");
      }
    
}

console.log(data);

//   const currentTableData = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     return data.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage]);

// const currentTableData = () => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     let res = data.slice(firstPageIndex, lastPageIndex);
//     setCurrentdata(res)
//   };

//   console.log(currentdata);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
       
          {/* {currentdata.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })} */}
             {data.slice(((currentPage - 1) * PageSize),(currentPage*10)).map((item , index) => {
            return (
                <tbody key={index}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
              </tbody>
            );
          })}
       
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
