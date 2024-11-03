declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.woff";

type CSSAbsoluteUnit = "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px";
type CSSRelativeUnit =
    | "em"
    | "ex"
    | "ch"
    | "rem"
    | "lh"
    | "rlh"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "vb"
    | "vi"
    | "svw"
    | "svh"
    | "lvw"
    | "lvh"
    | "dvw"
    | "dvh"
    | "%";

type SizeProp =
    | `${number}${CSSAbsoluteUnit | CSSRelativeUnit}`
    | "auto"
    | "fit-content"
    | "min-content"
    | "max-content"
    | "inherit"
    | "initial"
    | "unset";

type BoxSizing = {
    width: SizeProp;
    height: SizeProp;
};
