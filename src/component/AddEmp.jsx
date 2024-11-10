import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmp = () => {
  const { employeeList, setEmployeList } = useContext(listContext);
  const [isUpdate, setIsUpdating] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log("location", state);

  const [formValue, setFormValue] = useState({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Email: "",
    Education: "",
    Address: "",
    Salary: "",
    JoiningDate: "",
    Performance: "normal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isUpdate) {
      setEmployeList([...employeeList, formValue]);
      setFormValue({
        EmployeeName: "",
        EmployeeId: "",
        Designation: "",
        Email: "",
        Education: "",
        Address: "",
        Salary: "",
        JoiningDate: "",
        Performance: "normal",
      });
    } else {
      const updating = employeeList?.map((item, index) => {
        return index === state?.ind ? { ...item, ...formValue } : item;
      });
      setEmployeList(updating);
      setIsUpdating(false)
      navigate("/");
    }
  };

  useEffect(() => {
    if (state?.data) {
      setIsUpdating(true);
      setFormValue({ ...state?.data });
    }
  }, [state?.data]);
  console.log("employee-list", employeeList);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="m-0">ADD EMPLOYEE</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row row-gap-3">
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EMPLOYEE NAME
                    </label>
                    <input
                      type="text"
                      placeholder="EMPLOYEE NAME"
                      className="form-input"
                      name="EmployeeName"
                      value={formValue?.EmployeeName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EMPLOYEE ID
                    </label>
                    <input
                      type="text"
                      placeholder="EMPLOYEE ID"
                      className="form-input"
                      name="EmployeeId"
                      value={formValue?.EmployeeId}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      DESIGNATION
                    </label>
                    <input
                      type="text"
                      placeholder="DESIGNATION"
                      className="form-input"
                      name="Designation"
                      value={formValue?.Designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EMAIL
                    </label>
                    <input
                      type="text"
                      placeholder="EMAIL"
                      className="form-input"
                      name="Email"
                      value={formValue?.Email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EDUCATION
                    </label>
                    <input
                      type="text"
                      placeholder="EDUCATION"
                      className="form-input"
                      name="Education"
                      value={formValue?.Education}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      ADDRESS
                    </label>
                    <input
                      type="text"
                      placeholder="ADDRESS"
                      className="form-input"
                      name="Address"
                      value={formValue?.Address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      SALARY
                    </label>
                    <input
                      type="text"
                      placeholder="SALARY"
                      className="form-input"
                      name="Salary"
                      value={formValue?.Salary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      JOINING DATE
                    </label>
                    <input
                      type="date"
                      className="form-input"
                      name="JoiningDate"
                      value={formValue?.JoiningDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      PERFORMANCE
                    </label>
                    <select
                      id=""
                      className="form-input"
                      name="Performance"
                      value={formValue?.Performance}
                      onChange={handleChange}
                    >
                      <option value="normal">NORMAL</option>
                      <option value="average">AVERAGE</option>
                      <option value="excellent">EXCELLENT</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">
                      {isUpdate ? "UPDATE":"SUBMIT"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
