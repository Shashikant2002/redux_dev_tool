import Chance from "chance";

const chance = Chance();

export const fackUserData = () => {
    return chance.name({middle: true});
};
