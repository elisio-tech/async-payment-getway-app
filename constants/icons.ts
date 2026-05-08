import houseActive from "@/assets/icons/a-house.png";
import house from "@/assets/icons/house.png";
import payments from "@/assets/icons/house.svg";
import paymentsActive from "@/assets/icons/paymentsActive.png";
import qrcode from "@/assets/icons/qrcode.png";
import wallet from "@/assets/icons/wallet.png";
import walletActive from "@/assets/icons/walletActive.png";

export const icons = {
  house,
  houseActive,
  wallet,
  walletActive,
  payments,
  paymentsActive,
  qrcode,
} as const;

export type IconKey = keyof typeof icons;
