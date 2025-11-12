import { products } from "../data/products.js";

const order = new Map();

export function addToOrder(productId) {
  const numericId = Number(productId);
  const product = products.find((p) => p.id === numericId);
  if (!product) return;

  const current = order.get(numericId) || { ...product, quantity: 0 };
  current.quantity += 1;
  order.set(numericId, current);
}

export function getOrderItems() {
  return Array.from(order.values());
}

export function getOrderTotal() {
  return getOrderItems().reduce((total, item) => total + item.price * item.quantity, 0);
}

export function clearOrder() {
  order.clear();
}
