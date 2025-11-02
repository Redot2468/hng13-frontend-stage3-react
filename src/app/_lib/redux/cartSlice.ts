import { RootState } from "@/app/_lib/redux/store";
import { CartType } from "@/app/_types/product-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartSliceType {
  cart: CartType[];
  isCartOpen: boolean;
}

const initialState: CartSliceType = {
  cart: [],
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onToggleCart(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },

    addCartOnMount(state, action: PayloadAction<CartType[]>) {
      state.cart = action.payload;
    },

    addProductToCart(state, action: PayloadAction<CartType>) {
      const isProductInCart = state.cart.some(
        (product) => product?._id === action.payload?._id,
      );

      state.cart = isProductInCart
        ? state.cart?.map((product) =>
            product?._id === action?.payload?._id && product?.quantity
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          )
        : [action.payload, ...state.cart];
    },

    updateProductQuantity(
      state,
      action: PayloadAction<{ id: string; type: "incr" | "decr" }>,
    ) {
      const { id, type } = action.payload;

      state.cart = state.cart?.map((product) =>
        product?._id === id
          ? {
              ...product,
              quantity:
                type === "incr"
                  ? product?.quantity + 1
                  : product?.quantity > 0
                    ? product?.quantity - 1
                    : product?.quantity,
            }
          : product,
      );
    },

    deleteOneProduct(state, action: PayloadAction<{ id: string }>) {
      state.cart = state.cart.filter(
        (product) => product?._id !== action.payload?.id,
      );
    },

    deleteAllProduct(state) {
      state.cart = [];
    },
  },
});

export const {
  onToggleCart,
  addCartOnMount,
  addProductToCart,
  updateProductQuantity,
  deleteAllProduct,
  deleteOneProduct,
} = cartSlice?.actions;

export const getCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
