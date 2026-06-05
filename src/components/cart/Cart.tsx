import { BgReveal, CartReveal } from "../utils/CartReveal";
import CartModal from "./CartModal";
import { useAppDispatch } from "@/store/hooks/hooks";
import { toggleCart } from "@/store/audophileSlice";

const Cart = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <CartReveal>
        <div
          className="
            fixed
            top-4
            bottom-4
            z-[60]
            w-[90vw]
            md:w-[24.5rem]
            right-1/2
            translate-x-1/2
            md:right-14
            lg:right-[8rem]
            xl:right-[10rem]
            md:translate-x-0
            overflow-y-auto
          "
        >
          <CartModal />
        </div>
      </CartReveal>

      <BgReveal>
        <div
          onClick={() => dispatch(toggleCart(false))}
          className="fixed inset-0 bg-black opacity-60 z-[50]"
        />
      </BgReveal>
    </>
  );
};

export default Cart;