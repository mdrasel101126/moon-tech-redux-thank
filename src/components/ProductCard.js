import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeToCart,
} from "../redux/actionCreators/productActions";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  //console.log(product);
  const location = useLocation();
  //console.log("Location: ", location);
  const dispatch = useDispatch();
  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
      key={product._id}
    >
      <div className="h-52 w-52 mx-auto">
        {location.pathname === "/cart" && (
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-center absolute -right-3 -top-3">
            <p>{product.quantity}</p>
          </div>
        )}
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {location.pathname === "/cart" && (
          <button
            onClick={() => dispatch(removeToCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            <RiDeleteBin5Fill />
          </button>
        )}
        {location.pathname === "/" && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {location.pathname === "/" && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
