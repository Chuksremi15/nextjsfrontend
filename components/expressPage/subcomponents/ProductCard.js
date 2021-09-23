import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { usePortalPageState } from "../../../store";
import { useState } from "react";
import {
  useExpressUserState,
  useLoggedInState,
  usePortalUserState,
} from "../../../store/user.store";
import router from "next/router";
import { addCart } from "../../../services/cart.service";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProductCard({
  discount,
  grid,
  src,
  discountPrice,
  percentDiscount,
  id,
  rating,
  data,
}) {
  const [open, setOpen] = useState(false);
  const { onPortal } = usePortalPageState();
  const { isloggedIn } = useLoggedInState();
  const { portalUserData } = usePortalUserState();
  const { expressUserData } = useExpressUserState();

  //to open warning snackbar message
  const handleClick = () => {
    if (!isloggedIn) {
      router.push(`/${onPortal ? "portal" : "express"}/account/login`);
      return;
    }
    if (!portalUserData?.user?.documentVerified && onPortal) {
      setOpen(true);
    }
    const items = {
      productId: id,
      quantity: 1,
    };
    if (onPortal) {
      addCart(items, portalUserData?.token);
    } else {
      addCart(items, expressUserData?.token);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toProduct = () => {
    router.push(`/${onPortal ? "portal" : "express"}/shop/product/${id}`);
  };

  return (
    <div
      className={`
        flex flex-col bg-white p-2 rounded-lg shadow-lg
        relative ${
          grid ? "max-w-44 w-full" : "w-44"
        } flex-shrink-0 overflow-hidden
        `}
    >
      {discount && (
        <p
          className="
      absolute -top-0 -left-6 bg-[#EB5757]
      pt-3 pb-1 px-6 transform -rotate-45 font-[DM Sans] 
      text-xs font-light z-10 text-white
      "
        >
          {percentDiscount} OFF
        </p>
      )}
      <div
        className="
      absolute top-8 right-0 text-white z-10
      bg-[#F2C94C] flex items-center px-2 py-1 rounded-l-full
      "
      >
        <p className="text-xs font-light font-[DM Sans] mr-1 ">{rating}</p>
        <StarIcon className="h-4" />
      </div>
      <div onClick={toProduct}>
        <div className="w-full  flex flex-col">
          <div className="relative h-24 lg:h-28">
            <Image
              className=" bg-gray-100 rounded-lg"
              objectFit="fill"
              src={src ? src : "/codine.png"}
              layout="fill"
            />
          </div>
          <h1
            className="
        font-[DM Sans] text-sm text-[#828282] font-medium
        mb-4 mt-2 cursor-pointer
        "
          >
            {data.name}
          </h1>
        </div>
      </div>
      {discount && (
        <h1
          className="
        font-[DM Sans] text-base text-[#828282] font-medium
       line-through
        "
        >
          {discountPrice}
        </h1>
      )}

      <div
        className="
        flex items-center justify-between
        w-full
        "
      >
        <h1
          className="
            text-base text-green-black font-bold
            font-[DM Sans]
            "
        >
          {data.unitPrice.express && data.unitPrice.express}
        </h1>

        <img
          onClick={handleClick}
          src="/cartIcon.png"
          alt=""
          className="h-6 cursor-pointer "
        />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <Alert onClose={handleClose} severity="warning">
          Only verified users can order here
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductCard;
