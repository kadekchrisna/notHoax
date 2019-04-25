import moment from "moment";
export const getTimeAgo = (date) => {
    return moment(date).fromNow();
}