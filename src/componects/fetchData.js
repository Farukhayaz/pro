import axios from 'axios';
import { URL } from './endpoint';
import { setLoggedInAction, setTokenAction } from './user';
// import store from '../redux/store';
import { setUserAction } from './user';
class FetchData {
    static login(data) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'post',
                    url: URL.LOGIN,
                    data: data,
                });
                dispatch(setLoggedInAction(true));
                dispatch(setTokenAction(res));
                dispatch(setUserAction(res));
            } catch (error) {
                return Promise.reject(error);
            }
        };
    }

    static Signup(data) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'post',
                    url: URL.SIGNUP,
                    data: data,
                });
                // dispatch(setLoggedInAction(true));
                // dispatch(setUserAction(res));
            } catch (error) {
                console.log('err.', error);
                return Promise.reject(error);
            }
        };
    }

    static Organizations(data) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'post',
                    url: URL.ORGANIZATIONS,
                    data: data,
                });

                return res;
            } catch (error) {
                console.log('error:', error);
            }
        };
    }

    static Profile(data) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'put',
                    url: URL.PROFILE,
                    data: data,
                });
                return res;
            } catch (error) {
                console.log('error:', error);
            }
        };
    }

    static Skill(data) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'post',
                    url: URL.SKILL,
                    data: data,
                });
                return res;
            } catch (error) {
                console.log('error:', error);
            }
        };
    }

    static Experience(data) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'post',
                    url: URL.EXPERIENCE,
                    data: data,
                });
                return res;
            } catch (error) {
                console.log('error:', error);
            }
        };
    }

    static async getProfile(user_id) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'get',
                    url: URL.GETPROFILE + `?user_id=${user_id}`,
                });
                return res.data;
            } catch (error) {
                console.log('error:', error);
            }
        };
    }

    static searchJobs(job) {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'get',
                    url: URL.SEARCHJOBS + `/designations?job_name=${job}`,
                    data: {},
                });
                return res;
            } catch (error) {
                console.log('error:', error);
            }
        };
    }

    static getAllJobs() {
        return async dispatch => {
            try {
                const res = await client({
                    method: 'get',
                    url: URL.SEARCHJOBS,
                    data: {},
                });
                return res;
            } catch (error) {
                console.log('error:', error);
            }
        };
    }
}

// const token = '..your token..'
const client = axios.create({
    baseURL: URL.BaseURL,
    timeout: 1000,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: `Basic ${store.getState().user.token ?? ''}`,
    },
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },
});

export default FetchData;
