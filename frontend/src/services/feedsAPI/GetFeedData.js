import { feedsAPI } from './feedsAPI'
const getFeedData = (user, feed, time) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.access_token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${feedsAPI}/${feed.key}/data?start_time=${time}`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error => console.log('error', error));
}
export default getFeedData

