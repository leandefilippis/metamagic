import { grassImg, dirtImg, logImg, glassImg, woodImg } from "./images";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(dirtImg)
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

export { groundTexture }