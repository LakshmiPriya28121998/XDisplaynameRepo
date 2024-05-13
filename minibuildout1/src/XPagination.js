import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
// import data from './mock-data.json';
// import './styles.scss';
import axios from "axios";

let PageSize = 10;

export default function XPagination() {
  const [currentPage, setCurrentPage] = useState(1);
const [data, setData] = useState([]);


useEffect(() => {
    performAPICall()
},[])


const performAPICall = async () => {

       
    try{
    let result1 = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    setData(result1.data)

    
    }
    catch (e) {
        if (e.response && e.response.status === 500) {
         console.log(e.response.data.message);
        
        } else {
          console.log(
            "Could not details" );
        }
      }
    
}



  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
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
