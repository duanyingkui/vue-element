import request from '../../common/utils/request';

const HOMEPAGE = '';

export default {
    getIndexData() {
        return request.post(`${HOMEPAGE}/index`);
    },
};
