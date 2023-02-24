// 也可以导入外部包
// import dayjs from 'dayjs';

self.onmessage = ({ data }) => {
  // 使用 OffScreenCanvas(离屏Canvas)
  const canvas = data.canvas as HTMLCanvasElement;
  // 获取绘制上下文
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('Canvas 未存在');
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  // 绘制
  context.beginPath();
  context.arc(100, 100, 100, 0, Math.PI * 2);
  context.fillStyle = 'green';
  context?.fill();
  context.stroke();
  // 通知完成
  self.postMessage(true);
};
