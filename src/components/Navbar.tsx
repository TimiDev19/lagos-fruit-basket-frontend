import { useMemo, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks/hooks';
import {
  toggleCart,
  toggleMobileMenu,
  toggleAuthModal,
} from '@/store/audophileSlice';
import Cart from './cart/Cart';
import cartimg from '@/assets/cart.svg';
import logo from '../assets/logo.png';
import { Search } from 'lucide-react';
import products from '@/helpers/products';
import { Alert02Icon, Call02Icon, Search01Icon, ShoppingBag01Icon, Upload01Icon } from 'hugeicons-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(toggleCart(!cartIsShowing));
    dispatch(toggleMobileMenu(false));
    dispatch(toggleAuthModal(false));
    console.log(cartIsShowing);
  };
  const totalItems = useAppSelector((state) => state.appState.cart.length);

  const [searchInput, setSearchInput] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.items
      .filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchInput, products.items]);

  return (
    <>
      <div className=" z-50 fixed w-full">
        <div className=' h-[48px] w-[100vw] bg-[#245236] flex items-center justify-between px-[5%]'>
          <h1 className=' text-[12px] text-[#EFF901] flex items-center justify-start'><Call02Icon className=' text-[#EFF901] mr-2' size={22} strokeWidth={2} /> +234 813 584 6502</h1>
          <h1 className=' text-[12px] text-[#EFF901]'>lagosfruitbasket@gmail.com</h1>
        </div>
        {/*  */}

        <div className=" w-full fixed border-b border-b-black/20">
          <div className="flex w-full items-center justify-between pxpx py-3 bg-white">
            <div>
              <h1 className=" font-semibold text-xl flex items-center justify-center ">
                <img src={logo} className=" mr-[10px]" />
                <Link to={"/"} className=' font-semibold text-xl lg:text-[20px] text-black ml-3 hidden lg:block'>Lagos Fruit Basket</Link>
              </h1>
            </div>

            <div className=" lg:flex hidden items-center justify-center space-x-4">
              <Link
                to={'/'}
                className="relative group"
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#245236] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link
                to={'/#shop'}
                className="relative group"
              >
                Shop
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#245236] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              {/* SEARCH BAR */}

            </div>

            <div className=' flex items-center justify-center'>
              <div className="p-4">
                {/* Search Button */}
                {/* <button
                  onClick={() => setIsPopupOpen(true)}
                  className="px-4 py-2 text-black rounded-lg hover:text-blue-600 duration-500"
                >
                  <Search />
                </button> */}

                <div className=' max-sm:hidden flex items-center justify-center p-[5px] border border-[#E2E4E9] rounded-md w-[297px] h-[36px] mr-[10px]'>
                  <Search01Icon className=' text-[#868C98] mr-[10px]' size={20} strokeWidth={1} /><input type="text" placeholder='Search here' className=' text-[14px] text-[#525866] focus:outline-none w-full' />
                </div>

                {/* Popup */}
                {isPopupOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white h-[300px] overflow-scroll rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Search Products</h2>
                        <button
                          onClick={() => setIsPopupOpen(false)}
                          className="text-gray-500 hover:text-gray-800"
                        >
                          ✖
                        </button>
                      </div>

                      {/* Search Input */}
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      {/* Results */}
                      <div className="space-y-4">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product, i) => (
                            <div
                              key={i}
                              className="p-4 border border-gray-200 rounded-lg shadow-sm flex space-x-4"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <Link onClick={() => setIsPopupOpen(false)} to={`/product/${product.id}`} className="font-semibold duration-500 hover:underline">
                                  {product.name}
                                </Link>

                                <p className="text-lg font-bold text-blue-600">
                                  ${product.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500">No products found.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                onClick={toogleCartHandler}
                className="relative inline-flex items-center space-x-2 cursor-pointer"
              >
                <ShoppingBag01Icon className=' text-[#868C98]' size={30} strokeWidth={0.5} />
                <div className="absolute top-0 right-0 translate-y-[-0.4rem] translate-x-[0.4rem] bg-[#245236] text-white text-xs px-1 py-[2px] font-semibold rounded-full">
                  {totalItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
};

export default Navbar;
