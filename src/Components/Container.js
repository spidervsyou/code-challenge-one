

import React, { useEffect, useState } from "react";
import TableList from "./TableList";
import Search from "./Search";
import Form from "./Form";



function Container() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:3001/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Form />
      <TableList transactions={transaction} />
   
     
    </div>
  );
}

export default Container;
