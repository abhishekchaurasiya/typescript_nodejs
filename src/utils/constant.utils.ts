
const user: string = "/user";

const appVersion: string = String(process.env.APPVERSION)
const basePrefix: string = String(process.env.BASEPREFIX)

const userIndex = basePrefix + appVersion + user;

export default userIndex;
