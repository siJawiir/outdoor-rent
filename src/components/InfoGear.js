import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { deleteGear, getGearById, getGears } from "../services/gearsApi";
import BackButton from "../utils/BackButton";

function InfoGear() {
  const [gear, setGear] = useState([]);
  const params = useParams();

  const getGearInfo = () => {
    const { id } = params;
    getGearById(+id, (result) => {
      setGear({
        id: result.id,
        name: result.name,
        price: result.price,
        CategoryId: result.Category.name,
        description: result.description,
        // image: result.image,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getGearInfo();
  }, []);

  return (
    <div className="container my-4 mx-5 min-vh-100 position-relative">
      <div className="card position-relative d-flex">
        <BackButton link={"/gears"} />
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="http://via.placeholder.com/600x400?text=Gear"
              alt="Card image cap"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <h4 className="card-header">
              {gear.name} ({gear.CategoryId})
            </h4>
            <div className="card-body">
              <p className="card-text">
                <small className="text-muted">{gear.description}</small>
              </p>
            </div>
            <h4 className="card-text position-absolute bottom-0 end-0 pe-3 pb-3 color-primary">
              <span className="color-red">Rp {gear.price}</span>/day
            </h4>
            <div className="d-flex justify-content position-absolute bottom-0 ms-3 mb-3">
              <Link
                to={`/gears/edit/${gear.id}`}
                className="btn btn-success btn-sm text-white rounded me-2"
                type="submit"
              >
                {" "}
                Edit
                <FaEdit className="mx-1" />
              </Link>
              <button
                onClick={() => deleteGear(gear.id)}
                className="btn btn-danger btn-sm text-white rounded"
                type="submit"
              >
                {" "}
                Delete
                <FaTrashAlt className="mx-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoGear;
