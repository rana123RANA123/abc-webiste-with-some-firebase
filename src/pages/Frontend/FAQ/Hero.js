import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../../../config/firebase';

export default function Hero() {

  const [documents, setDocuments] = useState([])
  const [allDocuments, setAllDocuments] = useState([])


  const getTodos = async () => {

    const querySnapshot = await getDocs(collection(firestore, "contactData"));
    const array = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      array.push(data)
    });
    setAllDocuments(array)
    setDocuments(array)

  }
  console.log(getTodos)


  useEffect(() => {
    getTodos()
  }, [])




  return (
    <>

      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h1 className='text-center'>Your Right To Know</h1>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col hero2">
            <div style={{ marginTop: "140px" }}>
              <h1 className=' text-light fw-bold justify-content-start d-flex'>Got a question <br />Get your answer</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1>All Messages Here :- </h1>
          </div>
        </div>

      </div>



      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col">
            <div className="table-responsive mb-5">
              <table className="table table-striped table-hover mb-5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Message</th>
                    <th>Subject</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((message, i) => {
                    return (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{message.contactName}</td>
                        <td>{message.text}</td>
                        <td>{message.subject}</td>
                        <td>{message.email}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
