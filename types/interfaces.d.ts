declare interface PropsChildren{
  children: children
}

declare interface IProductSize{
  tag: "s" | "m" | "l",
  label: "Small" | "Medium" | "Large",
  quantity: string,
  price: number
}

declare interface IProduct{
  id: number,
  normal_name: string,
  special_name: string,
  description: string,
  sizes: IProductSize[]
  extras: string[],
  img: IImage
}

declare interface IImage{
  src: string,
  alt: string
}

declare interface IPropsDefaultComponents{
  className?: string
  onClick?: () => void,
  onChange?: () => void
}