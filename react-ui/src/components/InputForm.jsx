import React from "react";

const InputForm = (props) => {
  const {
    handleInputArray,
    arrayChange,
    arrayLength,
    inputArrayLength,
  } = props;

  // console.log(inputArrayLength.value);
  return (
    <div>
      <br />
      <form onSubmit={arrayLength}>
        <input
          className="form-control w-25 mr-sm-2 m-2"
          maxLength="5"
          size="5"
          type="number"
          placeholder="Enter the length of array"
          // onChange={arrayLength}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Submit
        </button>
      </form>
      <form onSubmit={handleInputArray}>
        <input
          className="form-control w-25 mr-sm-2 m-2"
          type="number"
          placeholder="Enter an array"
          onChange={arrayChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
