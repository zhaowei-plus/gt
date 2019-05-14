const download = require('download-git-repo')

download('git@github.com:zhaowei-plus/zw-pool-front.git', './temp', {
  clone: true
}, err => {
  if (err) {
    console.error('error:', err);
    return false;
  }

  console.info('git clone success');
});
