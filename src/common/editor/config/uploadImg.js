/* 文件上传配置 */

const customUploadImg = (resultFiles, insertImgFn) => {
  resultFiles.forEach((file) => {
    insertImgFn(URL.createObjectURL(file));
  });
};

export default {
  uploadImgMaxSize: 5 * 1024 * 1024, // 图片大小限制
  uploadImgAccept: ['jpg', 'jpeg', 'png', 'gif'], // 图片类型限制
  uploadImgMaxLength: 5, // 单次可传最大张数
  uploadImgTimeout: 5 * 1000, // 上传最大等待时间
  showLinkImg: false, // 隐藏插入网络图片功能
  customUploadImg, // 自定义文件上传
};
