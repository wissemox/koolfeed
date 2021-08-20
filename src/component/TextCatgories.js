import React from "react";

const TextCatgories = () => {
  return (
    <div>
      {/* Lign  */}
      <div className="flex justify-center	">
        <div>
          <img className="w-50" src="ligne03.svg" />
        </div>
      </div>

      <div className="flex justify-center mt-6 h-60 	">
        <div>
          <div className="text-center f-45  leading-10">
            <p className="font-medium font-semibold pb-4 Textcolor-grisStrong">
              Nos catégories{" "}
            </p>
          </div>
          <div className="Test text-center f-26 font-normal tracking-wide	font-light	">
            <p>Savourez des plats faits maison à travers le monde</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCatgories;
