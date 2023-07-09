import { ButtonHTMLAttributes, ElementType } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}
export default function IconStyle({ icon: Icon, ...rest }: Props) {
  return <Icon {...rest} className=" text-xl text-black cursor-pointer" />;
}
