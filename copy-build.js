// copy-build.js
const fs = require('fs-extra');
const path = require('path');

const srcDir = path.join(__dirname, 'docscode', '.vitepress', 'dist');
const destDir = path.join(__dirname, 'docs');

async function copyBuild() {
  try {
    // 确保目标目录存在
    await fs.ensureDir(destDir);
    
    // 清空目标目录（可选）
    await fs.emptyDir(destDir);

    // 复制文件
    await fs.copy(srcDir, destDir);
    console.log('Build copied successfully');

    // 删除源目录
    await fs.remove(srcDir);
    console.log('Source build directory removed');
  } catch (err) {
    console.error('Error copying build:', err);
  }
}

copyBuild();