import axios from 'axios'
// 获取职位招聘信息
export function getJobList(data) {
    return axios.get('position', {
        params: data
    })
}