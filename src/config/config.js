
// const serverPaths = 'http://127.0.0.1:8081/';
const serverPaths = 'http://danielle.local:8081/';


function getServerPath() {
    // return 'https://opium-print.herokuapp.com/';
    return serverPaths;
}



module.exports = {
    getServerPath: getServerPath,
};