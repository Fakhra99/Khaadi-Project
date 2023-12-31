import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateContact = () => {
  const [accountData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4041/api/allcontacts/${id}`);
        const data = response.data.contact;

        // Prepopulate form fields with existing values
        setFormData({
          Fname: data.Fname,
          Lname: data.Lname,
          email: data.email,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4041/api/update/${id}`, accountData);
      toast.success("Contact Updated Successfully!");
      navigate("/adminn");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const onChange = (e) => {
    setFormData({ ...accountData, [e.target.name]: e.target.value });
  };

  const { Fname, Lname, email } = accountData;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-5 p-4 border rounded">
              <h3 className="mb-4">Update Contact </h3>
              <p className="fw-bold">(Update account: {id})</p>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  F Name: 
                </label>
                <input
                  type="text"
                  name="Fname"
                  value={Fname}
                  className="form-control"
                  onChange={onChange}
                  id="exampleFormControlInput1"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  L Name:
                </label>
                <input
                  type="text"
                  name="Lname"
                  value={Lname}
                  className="form-control"
                  onChange={onChange}
                  id="exampleFormControlInput1"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={onChange}
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateContact;
