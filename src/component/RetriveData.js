import { useState } from "react";

function RetriveData() {
  const [input, setInput] = useState();
  // console.log(input);

  const [result, setResult] = useState([]);
  // const a=result.map((item)=>{
  // console.log(item.DateOfBirth);

  // })

  let str = localStorage.getItem("data");
  let data = JSON.parse(str);

  const check = (e) => {
    let word = input;
    let filteredList = [];
    data.forEach((item) => {
      for (let key in item) {
        if (item[key].toString().includes(word)) filteredList.push(item);
      }
    });
    setResult(filteredList);

    // console.log(e);
  };

  // const check = () => {
  //   data.filter((item) => {
  //     if (item === input) {
  //       setResult(item);
  //     }
  //   });
  // };

  return (
    <div className="main-div">
      <h3 className="h1">Retrieve Information</h3>
      <div className="single-data">
        <div>
          <input
            className="search"
            type={"number"}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn-find" onClick={() => check()}>
            Find
          </button>
        </div>
        <div
          style={{
            border: "1px solid black",
            marginTop: "10px",
            padding: "0px 30px"
          }}
        >
          {result.length === 0 ? (
            <h1 className="no-data">NO DATA</h1>
          ) : (
            result.map((result) => {
              return (
                <div className="find-detail">
                  <h3 className="h3">
                    Name:{" "}
                    <span style={{ padding: "0px 60px" }}>{result.Name} </span>
                  </h3>
                  <h3 className="h3">
                    DOB:{" "}
                    <span style={{ padding: "0px 70px" }}>
                      {result.DateOfBirth}{" "}
                    </span>
                  </h3>
                  <h3 className="h3">
                    Aadhar:{" "}
                    <span style={{ padding: "0px 40px" }}>
                      {result.AadharNumber}{" "}
                    </span>
                  </h3>
                  <h3 className="h3">
                    Mobile No:{" "}
                    <span style={{ padding: "0px 0px" }}>
                      {result.MobileNumber}{" "}
                    </span>
                  </h3>
                  <h3 className="h3">
                    Age:{" "}
                    <span style={{ padding: "0px 80px" }}>{result.Age} </span>
                  </h3>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default RetriveData;
