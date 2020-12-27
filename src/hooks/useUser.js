/*This component data of the User login*/
export const SetUserLogin = async (objData) => {
    await localStorage.setItem('UserMakeupAdministration', JSON.stringify(objData));
    window.location = '/';
};
export const StateLogin = () => {
    return JSON.parse(localStorage.getItem('UserMakeupAdministration')) != undefined;
};
export const DeleteUserLogin = () => {
    localStorage.removeItem('UserMakeupAdministration');
    window.location = '/Login';
};
