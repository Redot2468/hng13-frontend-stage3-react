"use client";

import { addCartOnMount } from "@/app/_lib/redux/cartSlice";
import { CartType } from "@/app/_types/product-types";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CartInitializer({
  cartProducts,
}: {
  cartProducts: CartType[];
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCartOnMount(cartProducts));
  }, [dispatch]);

  return null;
}
