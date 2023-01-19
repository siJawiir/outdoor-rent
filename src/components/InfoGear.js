import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategories, getCategoryById } from "../services/categoriesApi";
import { getGearById, getGears } from "../services/gearsApi";
import BackButton from "../utils/BackButton";

function InfoGear() {
  //   const [gears, setGears] = useState([]);
  //     const getHandler = () => {
  //       getGearById((result) => setGears(result));
  //     };
  //     getHandler();

  const [gear, setGear] = useState([]);
  const params = useParams();
  const { id } = params;

  const getGearInfo = () => {
    const { id } = params;
    getGearById(+id, (result) => {
      setGear({
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
              Rp {gear.price}/day
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoGear;
