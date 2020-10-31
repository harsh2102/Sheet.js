import React from "react";
import "./App.css";
import * as XLSX from "xlsx";

function excelFileHandler(data) {
  
  data.forEach((el) => {
    const requireds = [
      "Invoice Numbers",
      "Pstng Date",
      "Vendor Code",
      "Vendor name",
    ];
    let res = requireds.reduce(
      (last, req) => last && req in el && el[req],
      true
    );
   if(res){

   }
  });
  if (data);
}

// https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/

export default function App() {
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
        console.log("error");
      };
    });
    promise.then((d) => {
      excelFileHandler(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
    </div>
  );
}
