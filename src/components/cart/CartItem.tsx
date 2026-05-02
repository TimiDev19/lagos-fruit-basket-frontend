import { useState } from 'react';
import { updateCart, removeItem } from '@/store/audophileSlice';
import { useAppDispatch } from '@/store/hooks/hooks';

const CartItem = ({
  id,
  img,
  name,
  price,
  quantity,
}: {
  id: string | number;
  img: string;
  name: string;
  price: number | string;
  quantity: number;
}) => {
  const [amount, setAmount] = useState(quantity);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    const updatedAmount = amount + 1;
    setAmount(updatedAmount);
    dispatch(updateCart({ id, updatedQuantity: updatedAmount }));
  };

  const handleDecrement = () => {
    if (amount > 1) {
      const updatedAmount = amount - 1;
      setAmount(updatedAmount);
      dispatch(updateCart({ id, updatedQuantity: updatedAmount }));
    }
  };

  return (
    <div className="flex items-center justify-between pt-[1rem]">
      <div className="flex gap-[0.8rem] ">
        <div className="bg-[#F1F1F1] h-[60px] overflow-hidden rounded-lg">
          <img
            src={img}
            alt=""
            width={70}
            className="rounded-xl scale-[1.5] translate-y-[0.9rem]"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-[1rem] tracking-wide items-start">
            {name}
          </p>
          <p className="font-semibold text-[1rem] opacity-50">{`₦ ${price.toLocaleString()}`}</p>
        </div>
      </div>
      <div className="flex relative justify-between gap-[4rem] bg-[#F1F1F1] py-[0.5rem] px-[1.2rem] md:ml-[0.1rem] font-semibold text-[0.85rem] uppercase">
        <span
          onClick={handleDecrement}
          className="cursor-pointer opacity-40 scale-[1.2]"
        >
          -
        </span>
        <span className="font-semibold absolute left-1/2 -translate-x-1/2">
          {amount}
        </span>
        <span
          onClick={handleIncrement}
          className="cursor-pointer opacity-40 scale-[1.2]"
        >
          +
        </span>
        <p
          onClick={() => dispatch(removeItem({ id }))}
          className="absolute opacity-40 underline font-bold text-[0.65rem] translate-y-[17px] cursor-pointer hover:opacity-80 duration-150 bottom-0 right-0"
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItem;
