import { AssetElt } from "@codeffekt/ce-core-data";

const possibleFilenameSuffixes = ["plotly"];

export function CeFormPlotlyMediaToTypeFunc(asset: AssetElt): string|undefined {

    if(!asset.originalname) {
        return undefined;
    }

    const fileNameElts = asset.originalname.split(".");

    if(fileNameElts.length && possibleFilenameSuffixes.includes(fileNameElts[1])) {
        return "application/plotly";
    }

    return undefined;
}